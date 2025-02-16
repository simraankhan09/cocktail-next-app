import React from "react";
import { Cocktail } from "../types";
import PaginatedCocktailList from "./PaginatedCocktailList";

type CocktailSearchProps = {
  data: Promise<Cocktail[]>;
};

const CocktailSearch = async (props: CocktailSearchProps) => {
  const data = await props.data;
  return <PaginatedCocktailList data={data} />;
};

export default CocktailSearch;
