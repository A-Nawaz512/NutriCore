import { FC } from "react"
import { Link } from "react-router-dom"
import Badge from "../ui/Badge"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

const Footer: FC = () => {
  return (
    <footer className="bg-[#25492D] text-gray-100 mt-16">
      <div className="container mx-auto py-16 px-8 md:px-16 grid md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">NutriCore</h2>
          <p className="text-gray-200 leading-relaxed">
            Daily-use supplements to boost your health, energy, and immunity.  
            Trusted by thousands for quality and reliability.
          </p>
          <div className="flex space-x-3 mt-2">
            <Badge color="green" className="rounded-md px-3 py-1 text-sm">Secure Payment</Badge>
            <Badge color="yellow" className="rounded-md px-3 py-1 text-sm">Certified</Badge>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-300 transition-colors duration-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-300 transition-colors duration-200">About</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-300 transition-colors duration-200">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-300 transition-colors duration-200">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Support / Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li>Email: support@nutricore.com</li>
            <li>Phone: +92 300 0000000</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
          <div className="flex space-x-3">
            <Link className="hover:text-green-300 transition-colors duration-200">
              <Facebook size={20} />
            </Link>
            <Link className="hover:text-green-300 transition-colors duration-200">
              <Instagram size={20} />
            </Link>
            <Link className="hover:text-green-300 transition-colors duration-200">
              <Twitter size={20} />
            </Link>
            <Link className="hover:text-green-300 transition-colors duration-200">
              <Linkedin size={20} />
            </Link>
          </div>
          <div className="mt-4">
            <p className="text-gray-300 mb-2">Subscribe to our newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-md text-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 text-center py-6 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} NutriCore. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
