import {  FC,  } from "react"
import { ChevronDown, Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Button from "../../../shared/components/ui/Button"
import type { ProductFilters } from "../hooks/useProductFilters"

interface ProductFilterProps {
  filters: ProductFilters
  updateFilters: (updates: Partial<ProductFilters>) => void
  resetFilters: () => void
}

const categories = ["All", "Vitamins", "Protein", "Omega", "Immunity", "Minerals", "Probiotics"]

const ProductFilter: FC<ProductFilterProps> = ({ filters, updateFilters, resetFilters }) => {
  const [open, setOpen] = useState(false)
  const [localSearch, setLocalSearch] = useState(filters.search)
  const [localMin, setLocalMin] = useState(filters.minPrice === 0 ? "" : String(filters.minPrice))
  const [localMax, setLocalMax] = useState(filters.maxPrice === 1000 ? "" : String(filters.maxPrice))
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedCategory = filters.category || "All"

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = () => {
    updateFilters({ search: localSearch })
  }

  const handlePriceApply = () => {
    updateFilters({
      minPrice: localMin ? Number(localMin) : 0,
      maxPrice: localMax ? Number(localMax) : 1000,
    })
  }

  const handleReset = () => {
    setLocalSearch("")
    setLocalMin("")
    setLocalMax("")
    resetFilters()
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-8">
      <div className="flex flex-col lg:flex-row items-stretch gap-3">

        {/* Search */}
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search supplements..."
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#25492D]/30 focus:border-[#25492D] transition"
          />
        </div>

        {/* Category Dropdown */}
        <div ref={dropdownRef} className="relative w-full lg:w-52">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="w-full flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:border-[#25492D] focus:outline-none focus:ring-2 focus:ring-[#25492D]/30"
          >
            {selectedCategory}
            <ChevronDown
              size={16}
              className={`transition-transform duration-200 ${open ? "rotate-180 text-[#25492D]" : "text-gray-400"}`}
            />
          </button>

          <AnimatePresence>
            {open && (
              <motion.ul
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="absolute z-20 mt-2 w-full bg-white border border-green-100 rounded-lg shadow-lg overflow-hidden"
              >
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => {
                      updateFilters({ category: cat === "All" ? "" : cat })
                      setOpen(false)
                    }}
                    className={`px-4 py-2.5 text-sm cursor-pointer transition ${selectedCategory === cat
                        ? "bg-[#25492D]/10 text-[#25492D] font-medium"
                        : "text-gray-600 hover:bg-green-50 hover:text-[#25492D]"
                      }`}
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
          <input
            type="number"
            placeholder="Min $"
            value={localMin}
            onChange={(e) => setLocalMin(e.target.value)}
            className="w-20 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#25492D]/30 focus:border-[#25492D] transition"
          />
          <span className="text-gray-400 text-sm">–</span>
          <input
            type="number"
            placeholder="Max $"
            value={localMax}
            onChange={(e) => setLocalMax(e.target.value)}
            className="w-20 border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#25492D]/30 focus:border-[#25492D] transition"
          />
          <Button variant="primary" size="sm" onClick={handlePriceApply}>
            Apply
          </Button>
        </div>

        {/* Reset */}
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-500 transition-colors px-2"
          title="Reset filters"
        >
          <X size={16} />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>
    </div>
  )
}

export default ProductFilter
