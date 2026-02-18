import { FC, useState } from "react"
import { ChevronDown } from "lucide-react"
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

        {/* Category Select */}
        <div className="relative w-full lg:w-56">
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              onCategoryChange(e.target.value)
            }}
            className="
              w-full appearance-none
              bg-white
              border border-gray-200
              rounded-lg
              px-4 py-2.5
              text-sm font-medium
              text-gray-700
              shadow-sm
              transition
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-[#13458A]/30
              focus:border-[#13458A]
              hover:border-[#13458A]
              cursor-pointer
            "
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Custom Arrow */}
          <ChevronDown
            size={18}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
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
            size="md"
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
