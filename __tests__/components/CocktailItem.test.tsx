import CocktailItem from "@/app/components/CocktailItem";
import { AppContextProvider } from "@/app/context/AppContext";
import { Cocktail } from "@/app/types";
import { render, screen } from "@testing-library/react";

const mockCocktailsItem: Cocktail = {
  idDrink: "11007",
  strDrink: "Margarita",
  strCategory: "Ordinary Drink",
  strInstructions:
    "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
  strDrinkThumb:
    "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
};

// Mock FavouriteBtns since it's not the focus of this test
jest.mock("../../app/components/FavouriteBtns", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="favourite-btn">FavouriteBtns</div>),
}));

describe("Cocktail Item", () => {
  it("render", () => {
    render(
      <AppContextProvider>
        <CocktailItem cocktail={mockCocktailsItem} />
      </AppContextProvider>
    );
    const img = screen.getByAltText(mockCocktailsItem.strDrink);
    expect(img).toHaveProperty("src", mockCocktailsItem.strDrinkThumb);

    const heading = screen.getByText(mockCocktailsItem.strDrink);
    expect(heading.textContent).toBe(mockCocktailsItem.strDrink);

    const span = screen.getByText(mockCocktailsItem.strCategory);
    expect(span.textContent).toBe(mockCocktailsItem.strCategory);
  });

  it("renders FavouriteBtns when showAddBtn is true", () => {
    render(
      <AppContextProvider>
        <CocktailItem cocktail={mockCocktailsItem} showAddBtn />
      </AppContextProvider>
    );
    const favBtn = screen.getByTestId("favourite-btn");
    expect(favBtn.textContent).toBe("FavouriteBtns");
  });

  it("renders FavouriteBtns when showRemoveBtn is true", () => {
    render(
      <AppContextProvider>
        <CocktailItem cocktail={mockCocktailsItem} showRemoveBtn />
      </AppContextProvider>
    );
    const favBtn = screen.getByTestId("favourite-btn");
    expect(favBtn.textContent).toBe("FavouriteBtns");
  });
});
