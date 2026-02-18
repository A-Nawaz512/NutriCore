import { FC, useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../../../shared/components/ui/Button"
import Input from "../../../shared/components/ui/Input"

interface ProductFilterProps {
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
  onPriceRangeChange: (min: number, max: number) => void
}

const categories = ["All", "Vitamins", "Protein", "Omega", "Immunity"]

const ProductFilter: FC<ProductFilterProps> = ({
  onSearch,
  onCategoryChange,
  onPriceRangeChange,
}) => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [open, setOpen] = useState(false)

  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () =>
      document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
      <div className="flex flex-col lg:flex-row items-stretch gap-4">

        {/* Search */}
        <Input
          placeholder="Search supplements..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(search)}
          className="flex-1"
        />

        {/* Custom Category Dropdown */}
        <div
          ref={dropdownRef}
          className="relative w-full lg:w-56"
        >
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="
              w-full flex items-center justify-between
              bg-white
              border border-gray-200
              rounded-lg
              px-4 py-2.5
              text-sm font-medium
              text-gray-700
              shadow-sm
              transition
              duration-200
              hover:border-[#13458A]
              focus:outline-none
              focus:ring-2
              focus:ring-[#13458A]/30
            "
          >
            {category}
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                open ? "rotate-180 text-[#13458A]" : "text-gray-400"
              }`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="
                  absolute z-20 mt-2 w-full
                  bg-white
                  border border-green-100
                  rounded-lg
                  shadow-lg
                  overflow-hidden
                "
              >
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => {
                      setCategory(cat)
                      onCategoryChange(cat)
                      setOpen(false)
                    }}
                    className={`
                      px-4 py-2.5 text-sm cursor-pointer transition
                      ${
                        category === cat
                          ? "bg-[green]/10 text-[#138a43] font-medium"
                          : "text-gray-600 hover:bg-green-50 hover:text-[#138a43]"
                      }
                    `}
                  >
                    {cat}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-24"
          />
          <Input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-24"
          />
          <Button
            variant="primary"
            size="m"
            onClick={() =>
              onPriceRangeChange(Number(minPrice), Number(maxPrice))
            }
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter
