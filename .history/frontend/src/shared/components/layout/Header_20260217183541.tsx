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
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-800">
          NutriCore
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-700 hover:bg-blue-400 px-5 py-2 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Cart + Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative flex">
            <ShoppingCart size={24} className="text-gray-700 hover:text-blue-800 transition" />
            <Badge color="red" className="absolute -top-2 -right-2">
              2
            </Badge>
          </Link>
          <Button variant="outline" size="sm">
            Login
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(prev => !prev)}>
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
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
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
