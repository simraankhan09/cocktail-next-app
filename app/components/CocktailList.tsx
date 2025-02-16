"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Cocktail } from "../types";
import { uniqBy } from "lodash";
import Loading from "./Loading";
import CocktailItem from "./CocktailItem";
import Button from "./Button";
import { Carousel } from "react-responsive-carousel";
import { FaArrowRotateRight } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CocktailProps = {
  apiUrl: string;
};

/**
 * @description To display random cocktails with refresh button
 */
const CocktailList = (props: CocktailProps) => {
  const { apiUrl } = props;

  const [cocktails, setCocktails] = useState<Cocktail[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const getRandomCocktails = useCallback(async () => {
    try {
      const cocktailList: Cocktail[] = [];
      setLoading(true);
      for (let index = 0; index < 5; index++) {
        const response = await fetch(apiUrl, {
          method: "GET",
        });
        if (response.ok) {
          const data = await response.json();
          cocktailList.push(data.drinks?.[0]);
        }
      }
      setCocktails(uniqBy(cocktailList, "idDrink"));
    } catch (error) {
      console.error(error);
      setCocktails([]);
    }
    setLoading(false);
  }, [apiUrl, refreshTrigger]);

  useEffect(() => {
    getRandomCocktails();
  }, [apiUrl]);

  useEffect(() => {
    if (!refreshTrigger || !apiUrl) return;
    getRandomCocktails();
  }, [refreshTrigger, apiUrl]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex justify-end">
        <Button
          className="mb-2"
          onClick={() => {
            setRefreshTrigger((prev) => prev + 1);
          }}
          children={<FaArrowRotateRight />}
        />
      </div>
      <Carousel
        axis="horizontal"
        animationHandler="slide"
        autoPlay
        children={cocktails.map((item) => (
          <div key={item.idDrink} className="m-2">
            <CocktailItem cocktail={item} />
          </div>
        ))}
        centerMode
        infiniteLoop
        interval={2500}
        useKeyboardArrows
        swipeable
        showThumbs={false}
      />
    </>
  );
};

export default CocktailList;
