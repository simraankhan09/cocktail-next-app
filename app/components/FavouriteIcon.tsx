"use client";

import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useAppContext } from "../context/AppContext";

/**
 * @description Nav Link for favourite list route, client component since using context
 */
const FavouriteIcon = () => {
  const { favouritesList } = useAppContext();

  return (
    <>
      {favouritesList.length ? (
        <div className="relative text-red-500">
          <FaRegHeart className="text-xl" />
          <div className="absolute -top-1 -right-2 text-[12px] font-semibold">
            {favouritesList.length}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FavouriteIcon;
