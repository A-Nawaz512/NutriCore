import { FC, useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Button from "../../../shared/components/ui/Button"
import ProductSkeleton from "../components/ProductSkeleton"
import { dummyProducts } from "../components/ProductGrid"
import type { Product } from "../components/ProductGrid"
import ProductImg from "../../../assets/About/"

const ProductDetailsPage: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { productId } = useParams<{ productId: string }>()

  const stateProduct = location.state as Product | undefined

  const [product, setProduct] = useState<Product | null>(stateProduct || null)
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Load product if not in state (page refresh or direct link)
  useEffect(() => {
    if (!product && productId) {
      const found = dummyProducts.find((p) => p.id === productId)
      if (found) {
        setProduct(found)
      } else {
        setError("Product not found")
        // Optional: redirect after showing error
        setTimeout(() => navigate("/products"), 2000)
      }
    }
  }, [productId, product, navigate])

  // Set default capsule quantity once product is available
  useEffect(() => {
    if (product?.supplementQuantityOptions?.length) {
      setSelectedQuantity(product.supplementQuantityOptions[0])
    }
  }, [product])

  // Show error if product not found
  if (error) {
    return (
      <div className="container mx-auto px-6 py-10 text-center text-red-600">
        <p>{error}</p>
        <p>Redirecting to products page...</p>
      </div>
    )
  }

  // Show skeleton while loading
  if (!product) return <ProductSkeleton />

  // Safe destructuring
  const images: string[] = Array.isArray(product.images) ? product.images : []
  const healthBenefits: string[] = Array.isArray(product.healthBenefits)
    ? product.healthBenefits
    : []
  const ingredients: string[] = Array.isArray(product.ingredients)
    ? product.ingredients
    : []
  const supplementOptions: number[] = Array.isArray(product.supplementQuantityOptions)
    ? product.supplementQuantityOptions
    : []

  return (
    <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <img
          src={images[0] || "https://placekitten.com/400/400"}
          alt={product.name || "Product"}
          className="rounded-xl w-full h-96 object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.name || "Unnamed Product"}</h1>

        <p className="text-2xl font-bold text-[#13458A]">
          ${typeof product.price === "number" ? product.price.toFixed(2) : "0.00"}
        </p>

        <p className="text-gray-600 leading-relaxed">
          {product.description || "No description available."}
        </p>

        {/* Capsule Selector */}
        {supplementOptions.length > 0 && (
          <div className="flex items-center gap-3">
            <label className="font-medium text-gray-700">Capsule Count:</label>
            <select
              value={selectedQuantity ?? undefined}
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
              {supplementOptions.map((q) => (
                <option key={q} value={q}>
                  {q} capsules
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Extra Info */}
        <div className="space-y-2 text-gray-600 text-sm">
          <p>
            <strong className="text-gray-800">Health Benefits:</strong>{" "}
            {healthBenefits.length > 0 ? healthBenefits.join(", ") : "N/A"}
          </p>

          <p>
            <strong className="text-gray-800">Ingredients:</strong>{" "}
            {ingredients.length > 0 ? ingredients.join(", ") : "N/A"}
          </p>

          <p>
            <strong className="text-gray-800">Usage Instructions:</strong>{" "}
            {product.usageInstructions || "N/A"}
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
