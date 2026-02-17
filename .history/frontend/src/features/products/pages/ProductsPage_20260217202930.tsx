import { FC } from "react"
import Button from "../../../shared/components/ui/Button"
import Card from "../../../shared/components/ui/Card"
import Badge from "../../../shared/components/ui/Badge"

// Dummy Product Data
const products = [
  {
    id: 1,
    name: "Vitamin C Capsules",
    price: 19.99,
    image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
    category: "Vitamins",
    benefits: ["Boosts immunity", "Supports skin health", "Reduces fatigue"],
  },
  {
    id: 2,
    name: "Omega-3 Softgels",
    price: 29.99,
    image: "https://images.pexels.com/photos/3861796/pexels-photo-3861796.jpeg",
    category: "Vitamins",
    benefits: ["Supports heart health", "Reduces inflammation", "Enhances brain function"],
  },
  {
    id: 3,
    name: "Protein Powder",
    price: 49.99,
    image: "https://images.pexels.com/photos/414883/pexels-photo-414883.jpeg",
    category: "Protein",
    benefits: ["Builds muscle", "Enhances recovery", "Supports weight management"],
  },
  {
    id: 4,
    name: "Immunity Booster",
    price: 24.99,
    image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
    category: "Supplements",
    benefits: ["Strengthens immune system", "Reduces fatigue", "Promotes wellness"],
  },
]

const ProductPage: FC = () => {
  return (
    <section className="py-16 container mx-auto px-4 sm:px-6 md:px-16">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-[#25492D] text-center mb-12">Our Products</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(product => (
          <Card key={product.id} className="flex flex-col items-center p-4">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold text-[#25492D] mb-2 text-center">
              {product.name}
            </h2>
            <p className="text-blue-800 font-bold mb-2 text-lg">${product.price.toFixed(2)}</p>
            <ul className="text-gray-700 mb-4 list-disc list-inside space-y-1 text-sm">
              {product.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <Button variant="primary" size="sm" className="w-full">
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-[#25492D] mb-8 text-center">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map(product => (
            <Card key={product.id} className="flex flex-col items-center p-4">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold text-[#25492D] mb-1 text-center">{product.name}</h3>
              <p className="text-blue-800 font-bold mb-2">${product.price.toFixed(2)}</p>
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductPage
