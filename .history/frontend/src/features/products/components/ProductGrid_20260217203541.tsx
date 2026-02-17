import { FC } from "react"
import ProductCard from "./ProductCard"
import { Product } from "../api/productsApi"

interface ProductsGridProps {
  products: Product[]
}

const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductsGrid
