import React from "react";
import { Cocktail } from "../types";
import FavouriteBtns from "./FavouriteBtns";

/**
 * @description Use to display single cocktail item
 */
const CocktailItem = ({
  cocktail,
  showAddBtn,
  showRemoveBtn,
}: {
  cocktail: Cocktail;
  showAddBtn?: boolean;
  showRemoveBtn?: boolean;
}) => {
  const { strCategory, strDrink, strDrinkThumb } = cocktail;
  return (
    <div className="relative">
      <img
        src={strDrinkThumb}
        alt={strDrink}
        className="rounded-lg object-cover object-center w-full h-64"
      />
      <div className="flex items-center mt-1">
        <h2 className="font-semibold text-[11px] xs:text-sm mr-2">
          {strDrink}
        </h2>
        <div className="bg-primary rounded-lg text-white p-1 text-center text-[10px] xs:text-xs">
          <span>{strCategory}</span>
        </div>
      </div>
      {showAddBtn || showRemoveBtn ? (
        <FavouriteBtns
          type={showAddBtn ? "ADD" : "REMOVE"}
          cocktail={cocktail}
        />
      ) : null}
    </div>
  );
};

export default CocktailItem;
