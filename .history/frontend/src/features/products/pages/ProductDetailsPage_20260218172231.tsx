import { FC, useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Button from "../../../shared/components/ui/Button"
import ProductSkeleton from "../components/ProductSkeleton"

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

// Dummy products array (reuse this from ProductsGrid)
const dummyProducts: Product[] = Array.from({ length: 12 }).map((_, idx) => ({
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

const ProductDetailsPage: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  // Get product from state OR fallback to dummy
  const stateProduct = location.state as Product | undefined
  const [product, setProduct] = useState<Product | null>(stateProduct || null)
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null)

  // On mount, set product and quantity
  useEffect(() => {
    if (stateProduct) {
      setProduct(stateProduct)
      setSelectedQuantity(stateProduct.supplementQuantityOptions[0])
      return
    }

    // Fallback: find product in dummy array by id
    const found = dummyProducts.find((p) => p.id === id)
    if (found) {
      setProduct(found)
      setSelectedQuantity(found.supplementQuantityOptions[0])
      return
    }

    // If not found, redirect safely
    navigate("/products")
  }, [id, stateProduct, navigate])

  // If product not loaded yet
  if (!product || selectedQuantity === null) return <ProductSkeleton />

  return (
    <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">

      {/* Product Image */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="rounded-xl w-full h-96 object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-2xl font-bold text-[#13458A]">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        {/* Capsule Selector */}
        <div className="flex items-center gap-3">
          <label className="font-medium text-gray-700">Capsule Count:</label>
          <select
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
            className="
              bg-white
              border border-gray-200
              rounded-xl
              px-4 py-2
              text-sm
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-[#13458A]/30
              focus:border-[#13458A]
              transition
              hover:border-[#13458A]/40
            "
          >
            {product.supplementQuantityOptions.map((q) => (
              <option key={q} value={q}>
                {q} capsules
              </option>
            ))}
          </select>
        </div>

        {/* Extra Info */}
        <div className="space-y-2 text-gray-600 text-sm">
          <p>
            <strong className="text-gray-800">Health Benefits:</strong>{" "}
            {product.healthBenefits.join(", ")}
          </p>
          <p>
            <strong className="text-gray-800">Ingredients:</strong>{" "}
            {product.ingredients.join(", ")}
          </p>
          <p>
            <strong className="text-gray-800">Usage Instructions:</strong>{" "}
            {product.usageInstructions}
          </p>
        </div>

        <Button variant="primary" size="md" className="mt-4">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductDetailsPage
