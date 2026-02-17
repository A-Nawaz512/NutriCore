import { FC, useState } from "react"
import Card from "../../../shared/components/ui/Card"
import Button from "../../../shared/components/ui/Button"
import Pagination from "../../../shared/components/ui/Pagination"
import Featured01 from "../../../assets/Home/Featured01.jpg"
import Featured01 from "../../../assets/Home/Featured02.jpg"
import Featured01 from "../../../assets/Home/Featured03.jpg"
import Featured01 from "../../../assets/Home/Featured04.jpg"

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
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#25492D]">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product => (
          <Card
            key={product.id}
            className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
              <p className="text-[#25492D] font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
            </div>
            <Button variant="primary" size="sm" className="w-full mt-auto">
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  )
}

export default FeaturedProducts
