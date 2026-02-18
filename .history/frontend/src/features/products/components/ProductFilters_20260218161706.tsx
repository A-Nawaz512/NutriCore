import { FC, useState } from "react"
import Button from "../../../shared/components/ui/Button"
import Input from "@/shared/components/ui/Input"

interface ProductFilterProps {
  onSearch: (query: string) => void
  onCategoryChange: (category: string) => void
  onPriceRangeChange: (min: number, max: number) => void
}

const categories = ["All", "Vitamins", "Protein", "Omega", "Immunity"]

const ProductFilter: FC<ProductFilterProps> = ({ onSearch, onCategoryChange, onPriceRangeChange }) => {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <Input
        placeholder="Search products..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={e => e.key === "Enter" && onSearch(search)}
        className="flex-1"
      />
      <select
        value={category}
        onChange={e => { setCategory(e.target.value); onCategoryChange(e.target.value) }}
        className="border rounded-md px-3 py-2"
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <div className="flex gap-2">
        <Input
          placeholder="Min"
          value={minPrice}
          onChange={e => setMinPrice(e.target.value)}
          className="w-20"
        />
        <Input
          placeholder="Max"
          value={maxPrice}
          onChange={e => setMaxPrice(e.target.value)}
          className="w-20"
        />
        <Button variant="primary" size="sm" onClick={() => onPriceRangeChange(Number(minPrice), Number(maxPrice))}>
          Apply
        </Button>
      </div>
    </div>
  )
}

export default ProductFilter
