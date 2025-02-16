"use client";

import React from "react";
import { useAppContext } from "../context/AppContext";
import CocktailItem from "./CocktailItem";
import Link from "next/link";
import Button from "./Button";

/**
 * @description To display favourite list client component since using context
 */
const FavouriteList = () => {
  const { favouritesList } = useAppContext();

  if (!favouritesList.length) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-gray-500 text-center mb-2">List Empty</h2>
        <Link href="/">
          <Button children="Go to home" />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col xs:grid grid-cols-3 gap-3">
      {favouritesList.map((item) => (
        <CocktailItem key={item.idDrink} cocktail={item} showRemoveBtn />
      ))}
    </div>
  );
};

export default FavouriteList;
