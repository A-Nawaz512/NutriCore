import { FC, useState } from "react"
import ProductGrid from "../components/ProductGrid"
import Pagination from "../../../shared/components/ui/Pagination"
import Skeleton from "../../../shared/components/ui/Skeleton"

// Dummy products data
const dummyProducts = Array.from({ length: 12 }).map((_, idx) => ({
  id: `prod-${idx + 1}`,
  name: `Product ${idx + 1}`,
  price: Math.floor(Math.random() * 100) + 10,
  images: ["https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg"],
  description: "This is a sample product description.",
  stock: 20,
  category: "Vitamins",
  supplementQuantityOptions: [15, 30, 60, 120],
  healthBenefits: ["Boost immunity", "Increase energy"],
  ingredients: ["Ingredient A", "Ingredient B"],
  usageInstructions: "Take 1 capsule daily.",
}))

const ProductsPage: FC = () => {
  const [page, setPage] = useState(1)
  const limit = 12
  const totalPages = 3 // mock total pages

  // Simulate loading
  const isLoading = false
  const data = { products: dummyProducts, total: dummyProducts.length * totalPages }

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
          <ProductsGrid products={data.products} />
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
