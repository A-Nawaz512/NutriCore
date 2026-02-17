import { FC } from "react"
import Card from "../../../shared/components/ui/Card"
import Button from "../../../shared/components/ui/Button"
import Pagination from "@/shared/components/ui/Pagination"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Vitamin C Capsules",
    price: 19.99,
    image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
  },
  {
    id: 2,
    name: "Omega-3 Softgels",
    price: 29.99,
    image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
  },
  {
    id: 3,
    name: "Protein Powder",
    price: 49.99,
    image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
  },
  {
    id: 4,
    name: "Immunity Booster",
    price: 24.99,
    image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
  },
]

const FeaturedProducts: FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 3 // mock

  return (
    <section className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {products.map(product => (
          <Card key={product.id}>
            <img src={product.image} alt={product.name} className="rounded-lg mb-4 w-full h-40 object-cover" />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-blue-800 font-bold mb-4">${product.price.toFixed(2)}</p>
            <Button variant="primary" size="sm" className="w-full">
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </section>
  )
}

export default FeaturedProducts
