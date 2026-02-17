import { FC, useState } from "react"
import { useParams } from "react-router-dom"
import Button from "../../../shared/components/ui/Button"
import Badge from "../../../shared/components/ui/Badge"
import Card from "../../../shared/components/ui/Card"

// Mock product data
const mockProduct = {
  id: 1,
  name: "Vitamin C Capsules",
  price: 19.99,
  stock: 25,
  category: "Vitamins",
  images: [
    "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
    "https://images.pexels.com/photos/3861940/pexels-photo-3861940.jpeg",
  ],
  supplementQuantityOptions: [15, 30, 60, 120],
  healthBenefits: [
    "Boosts immunity",
    "Supports skin health",
    "Reduces fatigue",
  ],
  ingredients: ["Vitamin C", "Ascorbic Acid", "Rose Hips"],
  usageInstructions: "Take 1 capsule daily with water or as directed by your healthcare professional.",
}

const ProductPage: FC = () => {
//   const { id } = useParams()
//   const product = mockProduct // Replace with fetch from API using id
//   const [selectedQty, setSelectedQty] = useState<number>(product.supplementQuantityOptions[0])
//   const [cartQty, setCartQty] = useState<number>(1)

//   const incrementQty = () => setCartQty(prev => Math.min(prev + 1, product.stock))
//   const decrementQty = () => setCartQty(prev => Math.max(prev - 1, 1))

  return (
    <section className="py-12 container mx-auto px-4 sm:px-6 md:px-16">
      {/* Breadcrumb */}
      <nav className="text-gray-500 text-sm mb-6">
        Home &gt; {product.category} &gt; {product.name}
      </nav>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2 flex flex-col gap-4">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={product.name}
              className="rounded-lg w-full h-80 object-cover shadow-md"
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#25492D]">{product.name}</h1>
          <p className="text-2xl font-semibold text-blue-800">${product.price.toFixed(2)}</p>

          <div>
            <h3 className="font-semibold mb-2 text-[#25492D]">Description</h3>
            <p className="text-gray-700">{product.usageInstructions}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-[#25492D]">Health Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.healthBenefits.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-[#25492D]">Ingredients</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.ingredients.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>

          {/* Supplement Quantity Options */}
          <div>
            <h3 className="font-semibold mb-2 text-[#25492D]">Supplement Quantity</h3>
            <div className="flex gap-3 flex-wrap">
              {product.supplementQuantityOptions.map(option => (
                <Button
                  key={option}
                  variant={selectedQty === option ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedQty(option)}
                >
                  {option} Capsules
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity Selector + Add to Cart */}
          <div className="flex gap-4 items-center mt-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                className="px-3 py-1 font-bold text-gray-700 hover:bg-gray-100 transition"
                onClick={decrementQty}
              >
                -
              </button>
              <span className="px-4">{cartQty}</span>
              <button
                className="px-3 py-1 font-bold text-gray-700 hover:bg-gray-100 transition"
                onClick={incrementQty}
              >
                +
              </button>
            </div>
            <Button
              variant="primary"
              size="md"
              className="flex-1"
            >
              Add to Cart
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex gap-3 mt-4 flex-wrap">
            <Badge color="green">Certified</Badge>
            <Badge color="blue">Secure Payment</Badge>
            <Badge color="yellow">Fast Delivery</Badge>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-[#25492D]">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <Card key={i}>
              <img
                src="https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg"
                alt="Product"
                className="rounded-lg w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">Product {i}</h3>
              <p className="text-blue-800 font-bold mb-4">$19.99</p>
              <Button variant="primary" size="sm" className="w-full">Add to Cart</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductPage
