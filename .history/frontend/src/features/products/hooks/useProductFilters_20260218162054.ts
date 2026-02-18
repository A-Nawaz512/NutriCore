import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export interface ProductFilters {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  page: number;
  limit: number;
}

const DEFAULT_LIMIT = 9;

export const useProductFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: ProductFilters = useMemo(() => {
    return {
      search: searchParams.get("search") || "",
      category: searchParams.get("category") || "",
      minPrice: Number(searchParams.get("minPrice")) || 0,
      maxPrice: Number(searchParams.get("maxPrice")) || 1000,
      page: Number(searchParams.get("page")) || 1,
      limit: Number(searchParams.get("limit")) || DEFAULT_LIMIT,
    };
  }, [searchParams]);

  const updateFilters = (updates: Partial<ProductFilters>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value === "" || value === null || value === undefined) {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });

    // Reset page if filters change (important UX rule)
    if (
      updates.search !== undefined ||
      updates.category !== undefined ||
      updates.minPrice !== undefined ||
      updates.maxPrice !== undefined
    ) {
      newParams.set("page", "1");
    }

    setSearchParams(newParams);
  };

  const resetFilters = () => {
    setSearchParams({
      page: "1",
      limit: String(DEFAULT_LIMIT),
    });
  };

  return {
    filters,
    updateFilters,
    resetFilters,
  };
};
