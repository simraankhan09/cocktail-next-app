import Button from "@/app/components/Button";
import { AppContextProvider } from "@/app/context/AppContext";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button", () => {
  it("render", () => {
    render(
      <AppContextProvider>
        <Button />
      </AppContextProvider>
    );
  });

  it("calls onClick when click", () => {
    const handleClick = jest.fn();
    render(
      <AppContextProvider>
        <Button children="Click Me" onClick={handleClick} />
      </AppContextProvider>
    );

    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
