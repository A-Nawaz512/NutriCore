import { FC } from "react"
import Button from "@/shared/components/ui/Button"
import Card from "@/shared/components/ui/Card"

// Dummy product type
interface Product {
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

interface ProductCardProps {
  product?: Product // optional prop, fallback to dummy
}

// Dummy product fallback
const dummyProduct: Product = {
  id: "prod-1",
  name: "Sample Product",
  price: 29.99,
  images: ["https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg"],
  description: "This is a sample product description.",
  stock: 20,
  category: "Vitamins",
  supplementQuantityOptions: [15, 30, 60, 120],
  healthBenefits: ["Boost immunity", "Increase energy"],
  ingredients: ["Ingredient A", "Ingredient B"],
  usageInstructions: "Take 1 capsule daily.",
}

const ProductCard: FC<ProductCardProps> = ({ product = dummyProduct }) => {
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
