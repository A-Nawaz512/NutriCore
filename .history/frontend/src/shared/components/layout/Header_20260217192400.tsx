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
    <header className="bg-[#25492D] text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          NutriCore
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200 font-medium"
            >
              {link.name}
            </Link>
          ))}
          {/* Desktop Login Button */}
          <Button variant="outline" size="sm" className="ml-2">
            Login
          </Button>
        </nav>

        {/* Cart + Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative flex">
            <ShoppingCart size={24} className="text-white hover:text-green-300 transition-colors" />
            <Badge color="green" className="absolute -top-2 -right-2">
              2
            </Badge>
          </Link>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(prev => !prev)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#25492D] shadow-md border-t border-green-700">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-6 py-3 text-white hover:bg-green-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Login button visible only in mobile menu */}
          <div className="px-6 py-3">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-white border-white hover:bg-green-600 hover:border-green-600"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
