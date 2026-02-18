import { FC, useEffect, useState } from "react"
import Button from "../../../shared/components/ui/Button"
import ProductSkeleton from "../components/ProductSkeleton"
import { useProductDetails } from "../hooks/useProductDetails"

const ProductDetailsPage: FC = () => {
  const product = useProductDetails()
  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null)

  useEffect(() => {
    if (product?.supplementQuantityOptions?.length) {
      setSelectedQuantity(product.supplementQuantityOptions[0])
    }
  }, [product])

  if (!product || selectedQuantity === null) {
    return <ProductSkeleton />
  }

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
            <strong className="text-gray-800">Health Benefits:</strong> {product.healthBenefits.join(", ")}
          </p>
          <p>
            <strong className="text-gray-800">Ingredients:</strong> {product.ingredients.join(", ")}
          </p>
          <p>
            <strong className="text-gray-800">Usage Instructions:</strong> {product.usageInstructions}
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
