import { FC } from "react"
import ProductCard from "./ProductCard"

// Dummy product type
export interface Product {
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
