// import axios from "axios"

// export interface Product {
//   id: string
//   name: string
//   description: string
//   price: number
//   stock: number
//   category: string
//   images: string[]
//   supplementQuantityOptions: number[]
//   healthBenefits: string[]
//   ingredients: string[]
//   usageInstructions: string
// }

// const api = axios.create({
//   baseURL: "https://fakestoreapi.com", // replace with your real backend later
//   headers: { "Content-Type": "application/json" },
// })

// export const fetchProducts = async (page = 1, limit = 12): Promise<{ products: Product[]; total: number }> => {
//   // Mock pagination
//   const { data } = await api.get<Product[]>(`/products?limit=${limit}&page=${page}`)
//   const total = 100 // replace with backend total
//   return { products: data, total }
// }
