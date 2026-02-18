import { FC } from "react"
import { Link } from "react-router-dom"
import Card from "../../../shared/components/ui/Card"
import Button from "../../../shared/components/ui/Button"
import Badge from "../../../shared/components/ui/Badge"
import Featured01 from "../../../assets/Home/Featured01.jpg"
import Featured02 from "../../../assets/Home/Featured02.jpg"
import Featured03 from "../../../assets/Home/Featured03.jpg"
import Featured04 from "../../../assets/Home/Featured04.jpg"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: "prod-1",
    name: "Vitamin C 1000mg",
    price: 19.99,
    image: Featured01,
    category: "Vitamins",
    badge: "Best Seller",
  },
  {
    id: "prod-2",
    name: "Omega-3 Fish Oil",
    price: 29.99,
    image: Featured02,
    category: "Omega",
    badge: "Popular",
  },
  {
    id: "prod-3",
    name: "Whey Protein Isolate",
    price: 54.99,
    image: Featured03,
    category: "Protein",
    badge: "New",
  },
  {
    id: "prod-4",
    name: "Immunity Booster Complex",
    price: 24.99,
    image: Featured04,
    category: "Immunity",
    badge: null,
  },
]

const FeaturedProducts: FC = () => {
  return (
    <section className="py-16 container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Featured <span className="text-[#25492D]">Products</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">Our most popular daily supplements</p>
        </div>
        <Link to="/products">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            View All <ArrowRight size={16} />
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(product => (
          <Card
            key={product.id}
            className="hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between p-0 overflow-hidden group"
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <Badge color="green" className="text-xs">{product.category}</Badge>
                {product.badge && (
                  <span className="bg-[#25492D] text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-base font-semibold mb-1 text-gray-800 group-hover:text-[#25492D] transition-colors">
                {product.name}
              </h3>
              <p className="text-[#25492D] font-bold text-lg mb-4">${product.price.toFixed(2)}</p>
              <Link to={`/products/${product.id}`} className="mt-auto">
                <Button variant="primary" size="sm" className="w-full">
                  Add to Cart
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts
