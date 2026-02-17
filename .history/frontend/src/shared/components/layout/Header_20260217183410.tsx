import { FC, useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Menu, X } from "lucide-react"
import Button from "../ui/Button"
import Badge from "../ui/Badge"

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-800 hover:text-blue-600 transition-colors duration-300"
        >
          NutriCore
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:text-[#60A5FA] font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart + Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="relative flex items-center justify-center p-2 rounded-md hover:bg-blue-50 transition-colors duration-300"
          >
            <ShoppingCart
              size={24}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
            />
            <Badge color="red" className="absolute -top-1 -right-1 text-xs">
              2
            </Badge>
          </Link>

          <Button
            variant="outline"
            size="sm"
            className="hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-[#60A5FA] transition-colors duration-300 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
