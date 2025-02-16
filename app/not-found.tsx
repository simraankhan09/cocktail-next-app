import Link from "next/link";
import React from "react";
import Button from "./components/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-semibold text-xl text-primary mb-3">
        404 - Page Not Found
      </h1>
      <Link href="/">
        <Button children="Go to home" />
      </Link>
    </div>
  );
};

export default NotFound;
