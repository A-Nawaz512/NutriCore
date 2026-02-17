import { FC } from "react"
import { Link } from "react-router-dom"
import Badge from "../ui/Badge"

const Footer: FC = () => {
  return (
    <footer className="bg-blue-800 text-white mt-10">
      <div className="container mx-auto py-10 grid md:grid-cols-3 gap-6">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold">NutriCore</h2>
          <p className="mt-2 text-gray-200">
            Daily-use supplements to boost your health.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul>
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Trust */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p>Email: support@nutricore.com</p>
          <p>Phone: +92 300 0000000</p>
          <div className="flex mt-2 space-x-2">
            <Badge color="green">Secure Payment</Badge>
            <Badge color="blue">Certified</Badge>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 text-center py-4 text-gray-300">
        &copy; {new Date().getFullYear()} NutriCore. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
