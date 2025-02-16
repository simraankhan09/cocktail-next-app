import { getCocktailByName, getRandomCocktailsApiUrl } from "./utils/api-util";
import CocktailList from "./components/CocktailList";
import CocktailSearchForm from "./components/CocktailSearchForm";
import Link from "next/link";
import FavouriteIcon from "./components/FavouriteIcon";
import { Suspense } from "react";
import CocktailSearch from "./components/CocktailSearch";
import Loading from "./components/Loading";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;

  return (
    <>
      <div className="flex items-center justify-end p-3">
        <Link href="/favourite">
          <FavouriteIcon />
        </Link>
      </div>
      <h1 className="title">Welcome to TheCocktailDB</h1>
      <p className="sub-title">
        An open, crowd-sourced database of drinks and cocktails from around the
        world.
      </p>
      <CocktailList apiUrl={getRandomCocktailsApiUrl()} />
      <h1 className="title">Search Your Favourites Cocktails</h1>
      <div className="p-8">
        <CocktailSearchForm query={query} />
      </div>
      {query ? (
        <Suspense
          fallback={
            <div className="mt-5">
              <Loading />
            </div>
          }
        >
          <CocktailSearch data={getCocktailByName(query ?? "")} />
        </Suspense>
      ) : null}
    </>
  );
}
