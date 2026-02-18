import { FC } from "react"
import ProductCard from "./ProductCard"

// Dummy product type
export  interface Product {
  id: string
  name: string
  price: number
  images: string[]
  description: string
  stock: number
  category: string
  supplementQuantityOptions: number[]
  healthBenefits: string[]
  ingredients: string[]
  usageInstructions: string
}
interface ProductsGridProps {
  products?: Product[] // optional, so we can fallback to dummy
}

// Dummy products array
export const dummyProducts: Product[] = Array.from({ length: 12 }).map((_, idx) => ({
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
const ProductsGrid: FC<ProductsGridProps> = ({ products = dummyProducts }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsGrid
