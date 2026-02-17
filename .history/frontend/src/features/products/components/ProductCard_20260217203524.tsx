import { FC } from "react"
import Button from "@/shared/components/ui/Button"
import Card from "@/shared/components/ui/Card"
import { Product } from "../api/productsApi"

interface ProductCardProps {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="flex flex-col">
      <img
        src={product.images[0]}
        alt={product.name}
        className="rounded-lg mb-4 w-full h-40 object-cover"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
      <Button variant="primary" size="sm" className="mt-auto w-full">
        Add to Cart
      </Button>
    </Card>
  )
}

export default ProductCard
