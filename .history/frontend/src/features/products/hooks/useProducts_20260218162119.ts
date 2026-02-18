import { useQuery } from "@tanstack/react-query";
import { ProductFilters } from "./useProductFilters";
import { getProducts } from "../api/product.api";

export const useProducts = (filters: ProductFilters) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters),
    keepPreviousData: true, // Smooth pagination
    staleTime: 1000 * 60 * 2, // 2 min cache
  });
};
