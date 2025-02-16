"use client";

import React, { createContext, useContext, useState } from "react";
import { Cocktail } from "../types";

type AppContextType = {
  favouritesList: Cocktail[];
  addFavourites: (cocktail: Cocktail) => void;
  removeFavourites: (cocktail: Cocktail) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favouritesList, setFavouritesList] = useState<Cocktail[]>([]);

  const addFavourites = (cocktail: Cocktail) => {
    if (
      favouritesList.findIndex((item) => item.idDrink === cocktail.idDrink) !==
      -1
    ) {
      return;
    }
    setFavouritesList((prev) => [...prev, cocktail]);
  };

  const removeFavourites = (cocktail: Cocktail) => {
    // No need for create new array and filter, filter method return new array
    setFavouritesList(
      favouritesList.filter((item) => item.idDrink !== cocktail.idDrink)
    );
  };

  return (
    <AppContext.Provider
      value={{
        favouritesList,
        addFavourites,
        removeFavourites,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const conext = useContext(AppContext);
  if (!conext) {
    throw new Error(
      "Application Context should use under <AppContextProvider>"
    );
  }

  return conext;
};
