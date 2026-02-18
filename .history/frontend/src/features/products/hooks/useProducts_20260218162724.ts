import { useMemo } from "react"
import  ProductFilters  from "

interface DummyProduct {
  id: string
  name: string
  price: number
  images: string[]
  description: string
  stock: number
  category: string
  supplementQuantityOptions: number[]
  healthBenefits: string[]
  ingredients: string[]
  usageInstructions: string
}

const ALL_PRODUCTS: DummyProduct[] = Array.from({ length: 36 }).map(
  (_, idx) => ({
    id: `prod-${idx + 1}`,
    name: `Product ${idx + 1}`,
    price: Math.floor(Math.random() * 100) + 10,
    images: [
      "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg",
    ],
    description: "This is a sample product description.",
    stock: 20,
    category: idx % 2 === 0 ? "Vitamins" : "Protein",
    supplementQuantityOptions: [15, 30, 60, 120],
    healthBenefits: ["Boost immunity", "Increase energy"],
    ingredients: ["Ingredient A", "Ingredient B"],
    usageInstructions: "Take 1 capsule daily.",
  })
)

export const useProducts = (filters: ProductFilters) => {
  return useMemo(() => {
    const { page, limit, search, category, minPrice, maxPrice } = filters

    let filtered = [...ALL_PRODUCTS]

    // Search filter
    if (search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    // Category filter
    if (category) {
      filtered = filtered.filter((p) => p.category === category)
    }

    // Price filter
    filtered = filtered.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    )

    const total = filtered.length
    const totalPages = Math.ceil(total / limit)

    const start = (page - 1) * limit
    const end = start + limit

    const paginatedProducts = filtered.slice(start, end)

    return {
      data: {
        products: paginatedProducts,
        total,
        totalPages,
        currentPage: page,
      },
      isLoading: false,
    }
  }, [filters])
}
