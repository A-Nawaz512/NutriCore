import { FC, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchProducts, Product } from "../api/productsApi"
import Button from "../../../shared/components/ui/Button"
import ProductSkeleton from "../components/ProductSkeleton"

const ProductDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const result = await fetchProducts()
      return result.products.find((p) => p.id === id) as Product
    },
    enabled: !!id,
  })

  const [selectedQuantity, setSelectedQuantity] = useState<number | null>(null)

  // Set default quantity AFTER data loads
  useEffect(() => {
    if (data?.supplementQuantityOptions?.length) {
      setSelectedQuantity(data.supplementQuantityOptions[0])
    }
  }, [data])

  if (isLoading || !data || selectedQuantity === null) {
    return <ProductSkeleton />
  }

  return (
    <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      
      {/* Product Image */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
        <img
          src={data.images[0]}
          alt={data.name}
          className="rounded-lg w-full h-96 object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {data.name}
        </h1>

        <p className="text-2xl font-bold text-[#13458A]">
          ${data.price.toFixed(2)}
        </p>

        <p className="text-gray-600 leading-relaxed">
          {data.description}
        </p>

        {/* Capsule Selector */}
        <div className="flex items-center gap-3">
          <label className="font-medium text-gray-700">
            Capsule Count:
          </label>

          <select
            value={selectedQuantity}
            onChange={(e) =>
              setSelectedQuantity(Number(e.target.value))
            }
            className="
              border border-gray-200
              rounded-lg
              px-4 py-2
              text-sm
              shadow-sm
              focus:outline-none
              focus:ring-2
              focus:ring-[#13458A]/30
              focus:border-[#13458A]
              transition
            "
          >
            {data.supplementQuantityOptions.map((q) => (
              <option key={q} value={q}>
                {q} capsules
              </option>
            ))}
          </select>
        </div>

        {/* Extra Info */}
        <div className="space-y-2 text-gray-600 text-sm">
          <p>
            <strong className="text-gray-800">
              Health Benefits:
            </strong>{" "}
            {data.healthBenefits.join(", ")}
          </p>

          <p>
            <strong className="text-gray-800">
              Ingredients:
            </strong>{" "}
            {data.ingredients.join(", ")}
          </p>

          <p>
            <strong className="text-gray-800">
              Usage Instructions:
            </strong>{" "}
            {data.usageInstructions}
          </p>
        </div>

        <Button variant="primary" size="md" className="mt-4">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductDetailPage
