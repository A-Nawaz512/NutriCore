import { FC } from "react"
import ProductGrid from "../components/ProductGrid"
import ProductFilter from "../components/ProductFilter"
import Pagination from "../../../shared/components/ui/Pagination"
import Skeleton from "../../../shared/components/ui/Skeleton"
import { useProductFilters } from "../hooks/useProductFilters"
import { useProducts } from "../hooks/useProducts"

const ProductsPage: FC = () => {
  const { filters, updateFilters, resetFilters } = useProductFilters()
  const { data, isLoading } = useProducts(filters)

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Products
      </h1>

      <ProductFilter
        filters={filters}
        updateFilters={updateFilters}
        resetFilters={resetFilters}
      />

      {isLoading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {Array.from({ length: filters.limit }).map((_, idx) => (
            <Skeleton key={idx} className="h-64 w-full rounded-md" />
          ))}
        </div>
      ) : (
        <>
          <ProductGrid products={data?.products || []} />

          <Pagination
            currentPage={filters.page}
            totalPages={data?.totalPages || 1}
            onPageChange={(page) =>
              updateFilters({ page })
            }
          />
        </>
      )}
    </div>
  )
}

export default ProductsPage
