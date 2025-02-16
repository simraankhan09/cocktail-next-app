"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Cocktail } from "../types";
import CocktailItem from "./CocktailItem";
import { uniqueId } from "lodash";

type PaginatedCocktailListProps = {
  data: Cocktail[];
};

type PaginationConfig = {
  pageSize: number;
  pageNumber: number;
  total: number;
};

const PaginationBtn = (props: {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
}) => {
  const { onClick, children, className } = props;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

/**
 * @description To display user search cocktails with pagination
 */
const PaginatedCocktailList = (props: PaginatedCocktailListProps) => {
  const { data } = props;

  const [dataToDisplay, setDataToDisplay] = useState<Cocktail[]>([]);
  const [pagination, setPagination] = useState<PaginationConfig>({
    pageNumber: 0,
    pageSize: 6,
    total: 0,
  });

  useEffect(() => {
    if (!data || !Array.isArray(data) || !data.length) return;
    setPagination((prev) => ({
      ...prev,
      total: data.length,
    }));
  }, [data]);

  useEffect(() => {
    if (!pagination.total) return;
    const { pageNumber, pageSize } = pagination;
    const offset = pageSize + pageSize * pageNumber;
    const paginatedData = data.slice(pageNumber * pageSize, offset);
    setDataToDisplay(paginatedData);
  }, [pagination, data]);

  const totalPage = useMemo(() => {
    if (!data || !Array.isArray(data) || !data.length) return 0;
    let total = data.length / pagination.pageSize;
    if (!Number.isInteger(total)) {
      total += 1;
    }
    return total;
  }, [data, pagination.pageSize]);

  return (
    <>
      {Array.isArray(dataToDisplay) && dataToDisplay.length ? (
        <div className="mt-5 flex flex-col  xs:grid grid-cols-3 gap-3">
          {dataToDisplay.map((item) => (
            <CocktailItem key={item.idDrink} cocktail={item} showAddBtn />
          ))}
        </div>
      ) : null}
      {totalPage ? (
        <div className="mt-5 flex items-center justify-end gap-x-1">
          {Array.from({ length: totalPage }, (_: any, k: number) => k).map(
            (size) => (
              <PaginationBtn
                key={uniqueId()}
                children={size + 1}
                onClick={() => {
                  const newPagination = { ...pagination };
                  newPagination["pageNumber"] = size;
                  setPagination(newPagination);
                }}
                className={`size-8 border ${
                  pagination.pageNumber === size
                    ? "border-primary"
                    : "border-gray-500"
                }  rounded-sm text-gray-600`}
              />
            )
          )}
        </div>
      ) : null}
    </>
  );
};

export default PaginatedCocktailList;
