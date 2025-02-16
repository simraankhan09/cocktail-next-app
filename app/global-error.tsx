"use client";

import { useEffect } from "react";
import Button from "./components/Button";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <html>
      <body>
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <h2 className="text-red-500 font-semibold mb-5">
            Something went wrong!
          </h2>
          <Button
            children="Try Again"
            onClick={() => window.location.reload()}
          />
        </div>
      </body>
    </html>
  );
}
