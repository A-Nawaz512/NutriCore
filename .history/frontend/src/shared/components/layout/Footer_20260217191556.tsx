import { FC } from "react"
import { Link } from "react-router-dom"
import Badge from "../ui/Badge"

const Footer: FC = () => {
  return (
    <footer className="bg-[#25492D] text-gray-100 mt-10">
      <div className="container mx-auto py-12 grid md:grid-cols-3 gap-8 px-4 md:px-0">
        {/* Branding */}
        <div>
          <h2 className="text-3xl font-bold mb-2">NutriCore</h2>
          <p className="text-gray-200">
            Daily-use supplements to boost your health and wellness.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                to="/" 
                className="hover:text-green-300 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-green-300 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className="hover:text-green-300 transition-colors duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-green-300 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Trust */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>Email: support@nutricore.com</p>
          <p>Phone: +92 300 0000000</p>
          <div className="flex mt-4 space-x-2 flex-wrap">
            <Badge color="green" className="rounded-md px-3 py-1 text-sm">
              Secure Payment
            </Badge>
            <Badge color="yellow" className="rounded-md px-3 py-1 text-sm">
              Certified
            </Badge>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 text-center py-4 text-gray-300">
        &copy; {new Date().getFullYear()} NutriCore. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
