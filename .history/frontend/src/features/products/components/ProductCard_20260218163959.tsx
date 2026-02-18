import { FC } from "react"
import Button from "../../../shared/components/ui/Button"
import Card from "../../../shared/components/ui/Card"

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
  name: "Vitamin C Capsules",
  price: 29.99,
  images: ["https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg"],
  description: "Boost your immunity with daily Vitamin C capsules.",
  stock: 20,
  category: "Vitamins",
  supplementQuantityOptions: [15, 30, 60, 120],
  healthBenefits: ["Boost immunity", "Increase energy"],
  ingredients: ["Vitamin C 500mg", "Microcrystalline cellulose"],
  usageInstructions: "Take 1 capsule daily with water.",
}

const navigate = useNavigate()

const handleClick = () => {
  navigate(`/products/${product.id}`, {
    state: { product },
  })
}

const ProductCard: FC<ProductCardProps> = ({ product = dummyProduct }) => {
  return (
    <Card className="flex flex-col p-4 hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="w-full h-44 overflow-hidden rounded-lg mb-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div onClick={handleClick} className="flex flex-col flex-1 cursor-pointer">
        <h3 className="text-lg font-semibold mb-1 text-gray-800">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-blue-800 font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
      </div>

      {/* Add to Cart Button */}
      <Button variant="primary" size="md" className="w-full mt-auto">
        Add to Cart
      </Button>
    </Card>
  )
}

export default ProductCard
