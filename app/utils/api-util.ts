import "server-only";
import { Cocktail } from "../types";

const BASE_URL = process.env.API_BASE_URL;
const API_VERSION = process.env.API_VERSION;
const API_KEY = process.env.API_KEY;

const apiUrl = `${BASE_URL}/${API_VERSION}/${API_KEY}`;

const getRandomCocktailsApiUrl = () => {
  return `${apiUrl}/random.php`;
};

const getCocktailByName = async (name: string): Promise<Cocktail[]> => {
  const params = new URLSearchParams({
    s: name,
  });
  const url = `${apiUrl}/search.php?${params.toString()}`;
  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
  });
  if (response.ok) {
    const data = await response.json();
    return data.drinks;
  }
  return [];
};

export { getRandomCocktailsApiUrl, getCocktailByName };
