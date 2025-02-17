import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FavouriteList from "../../app/components/FavouriteList";
import { AppContextProvider } from "../../app/context/AppContext";
import { Cocktail } from "@/app/types";
import CocktailItem from "@/app/components/CocktailItem";

const mockCocktailsItem: Cocktail = {
  idDrink: "11007",
  strDrink: "Margarita",
  strCategory: "Ordinary Drink",
  strInstructions:
    "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
};

describe("Favourite List Component", () => {
  it("renders", () => {
    render(
      <AppContextProvider>
        <FavouriteList />
      </AppContextProvider>
    );
  });

  it("renders heading - List empty", () => {
    render(
      <AppContextProvider>
        <FavouriteList />
      </AppContextProvider>
    );
    const heading = screen.getByText("List Empty");
    expect(heading).toBeInTheDocument();
  });

  it("renders Link Tag", () => {
    render(
      <AppContextProvider>
        <FavouriteList />
      </AppContextProvider>
    );
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("renders Button - Go to home", () => {
    render(
      <AppContextProvider>
        <FavouriteList />
      </AppContextProvider>
    );
    const button = screen.getByText("Go to home");
    expect(button).toBeInTheDocument();
  });

  it("renders CocktailItem component", () => {
    render(
      <AppContextProvider>
        <CocktailItem cocktail={mockCocktailsItem} showRemoveBtn />
      </AppContextProvider>
    );
  });
});
