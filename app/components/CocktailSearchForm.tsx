import React from "react";
import Form from "next/form";
import Button from "./Button";
import SearchFormReset from "./SearchFormReset";

type CocktailSearchFormProps = {
  query?: string;
};

/**
 * @description Cocktail search form with search input field use to capture user input
 */
const CocktailSearchForm = ({ query }: CocktailSearchFormProps) => {
  return (
    <Form
      action="/"
      className="flex-between gap-x-2"
      scroll={false}
      id="search-form"
    >
      <input
        name="query"
        className="search-box mr-2"
        placeholder="Enter a cocktail name"
        defaultValue={query}
      />
      {query ? <SearchFormReset /> : <Button children="Search" type="submit" />}
    </Form>
  );
};

export default CocktailSearchForm;
