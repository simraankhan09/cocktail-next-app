import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FavouritePage from "../../../app/favourite/page";
import { AppContextProvider } from "@/app/context/AppContext";

describe("Favourite Page", () => {
  it("renders", () => {
    render(
      <AppContextProvider>
        <FavouritePage />
      </AppContextProvider>
    );
  });
  it("renders heading", () => {
    render(
      <AppContextProvider>
        <FavouritePage />
      </AppContextProvider>
    );
    const heading = screen.getByText("Favourite List");
    expect(heading).toBeInTheDocument();
  });
});
