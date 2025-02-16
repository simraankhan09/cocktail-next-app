"use client";

import React from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import Button from "./Button";
import Link from "next/link";

/**
 * @description Reset user entered query
 */
const SearchFormReset = () => {
  const onReset = () => {
    const form = document.getElementById("search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <Link href="/" scroll={false}>
      <Button
        children={<RiCloseLargeLine />}
        type="reset"
        className="!bg-white !border !border-black !text-black"
        onClick={onReset}
      />
    </Link>
  );
};

export default SearchFormReset;
