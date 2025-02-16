"use client";

import React from "react";
import { FaPlus, FaRegTrashCan } from "react-icons/fa6";
import Button from "./Button";
import { Cocktail } from "../types";
import { useAppContext } from "../context/AppContext";

/**
 * @description Use to add or remove cocktails from favourite list
 */
const FavouriteBtns = ({
  cocktail,
  type,
}: {
  cocktail: Cocktail;
  type: "ADD" | "REMOVE";
}) => {
  const { addFavourites, removeFavourites } = useAppContext();
  return (
    <div className="absolute top-0 right-0">
      <Button
        className="!bg-[rgba(0,0,0,0.6)]"
        children={type === "ADD" ? <FaPlus /> : <FaRegTrashCan />}
        onClick={() => {
          if (type === "ADD") {
            addFavourites(cocktail);
          } else if (type === "REMOVE") {
            removeFavourites(cocktail);
          }
        }}
      />
    </div>
  );
};

export default FavouriteBtns;
