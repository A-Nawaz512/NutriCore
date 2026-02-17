import { FC, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchProducts, Product } from "../api/productsApi"
import ProductsGrid from "../components/ProductsGrid"
import Pagination from "@/shared/components/ui/Pagination"
import Skeleton from "@/shared/components/ui/Skeleton"

const ProductsPage: FC = () => {
  const [page, setPage] = useState(1)
  const limit = 12

  const { data, isLoading } = useQuery(
    ["products", page],
    () => fetchProducts(page, limit),
    { keepPreviousData: true }
  )

  const totalPages = data ? Math.ceil(data.total / limit) : 0

  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      {isLoading ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: limit }).map((_, idx) => (
            <Skeleton key={idx} className="h-64 w-full rounded-md" />
          ))}
        </div>
      ) : (
        <>
          <ProductsGrid products={data?.products || []} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </>
      )}
    </div>
  )
}

export default ProductsPage
