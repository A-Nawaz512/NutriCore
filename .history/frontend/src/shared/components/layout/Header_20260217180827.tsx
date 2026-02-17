import { FC, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ShoppingCart, Menu, X } from "lucide-react"
import Button from "../ui/Button"
import Badge from "../ui/Badge"
import { motion, AnimatePresence } from "framer-motion"

const Header: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-[#065F46] hover:text-[#047857] transition-colors duration-300"
        >
          NutriCore
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(link => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 font-medium rounded-md transition-all duration-300
                  ${
                    isActive
                      ? "text-white bg-[#065F46] shadow-md"
                      : "text-gray-700 hover:text-white hover:bg-[#047857]"
                  }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#064E3B] rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Cart + Auth Buttons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/cart"
            className="relative p-2 rounded-full hover:bg-[#047857] transition-colors duration-300"
          >
            <ShoppingCart
              size={24}
              className="text-gray-700 hover:text-white transition-colors duration-300"
            />
            <Badge color="red" className="absolute -top-1 -right-1 text-xs">
              2
            </Badge>
          </Link>

          <Button
            variant="outline"
            size="sm"
            className="hover:bg-[#065F46] hover:text-white shadow-sm transition-all duration-300 transform hover:scale-105"
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
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            {navLinks.map(link => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-[#047857] transition-colors duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
