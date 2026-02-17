import { FC, useState } from "react"
import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchProducts, Product } from "../api/productsApi"
import Button from "@/shared/components/ui/Button"
import ProductSkeleton from "../components/ProductSkeleton"

const ProductDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading } = useQuery(["product", id], async () => {
    const result = await fetchProducts() // ideally fetch single product by id
    return result.products.find(p => p.id === id) as Product
  })

  const [selectedQuantity, setSelectedQuantity] = useState<number>(data?.supplementQuantityOptions?.[0] || 1)

  if (isLoading || !data) return <ProductSkeleton />

  return (
    <div className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      <img src={data.images[0]} alt={data.name} className="rounded-lg w-full h-96 object-cover" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-blue-800 font-bold text-xl">${data.price.toFixed(2)}</p>
        <p className="text-gray-700">{data.description}</p>

        <div className="flex items-center gap-2">
          <label htmlFor="quantity" className="font-medium">Quantity:</label>
          <select
            id="quantity"
            value={selectedQuantity}
            onChange={e => setSelectedQuantity(Number(e.target.value))}
            className="border rounded-md px-3 py-2"
          >
            {data.supplementQuantityOptions.map(q => (
              <option key={q} value={q}>{q} capsules</option>
            ))}
          </select>
        </div>

        <p className="text-gray-600">
          <strong>Health Benefits:</strong> {data.healthBenefits.join(", ")}
        </p>
        <p className="text-gray-600">
          <strong>Ingredients:</strong> {data.ingredients.join(", ")}
        </p>
        <p className="text-gray-600">
          <strong>Usage Instructions:</strong> {data.usageInstructions}
        </p>

        <Button variant="primary" size="md">
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

export default ProductDetailPage
