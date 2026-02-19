import type { FC, useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Plus, Search, Filter, MoreVertical, Edit2, Trash2, ArrowUpDown } from "lucide-react"
import Table from "../../../shared/components/ui/Table"
import Card from "../../../shared/components/ui/Card"
import Pagination from "../../../shared/components/ui/Pagination"
import Button from "../../../shared/components/ui/Button"
import Badge from "../../../shared/components/ui/Badge"

const ProductsManagement: FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState("")
  const [itemsPerPage] = useState(5)

  // Dummy Data
  const products = [
    { id: 1, name: "Vitamin C 1000mg", category: "Vitamins", stock: 50, price: 19.99, image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg" },
    { id: 2, name: "Omega-3 Fish Oil", category: "Omega", stock: 12, price: 29.99, image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg" },
    { id: 3, name: "Whey Protein Isolate", category: "Protein", stock: 5, price: 54.99, image: "https://images.pexels.com/photos/5938359/pexels-photo-5938359.jpeg" },
    { id: 4, name: "Immunity Booster", category: "Immunity", stock: 45, price: 24.99, image: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg" },
    { id: 5, name: "Vitamin D3 + K2", category: "Vitamins", stock: 60, price: 22.99, image: "https://images.pexels.com/photos/4057743/pexels-photo-4057743.jpeg" },
    { id: 6, name: "Magnesium Glycinate", category: "Minerals", stock: 40, price: 18.99, image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg" },
    { id: 7, name: "Zinc Picolinate", category: "Minerals", stock: 8, price: 15.99, image: "https://images.pexels.com/photos/5938359/pexels-photo-5938359.jpeg" },
  ]

  // Filter & Pagination Logic
  const filteredProducts = useMemo(() => {
    return products.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
    )
  }, [products, search])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const columns = [
    {
      header: "Product Name",
      accessor: "name",
      render: (val: string, row: any) => (
        <div className="flex items-center gap-3">
          <img src={row.image} alt={val} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
          <span className="font-medium text-gray-900">{val}</span>
        </div>
      )
    },
    {
      header: "Category",
      accessor: "category",
      render: (cat: string) => <Badge color="blue">{cat}</Badge>,
    },
    {
      header: "Stock",
      accessor: "stock",
      sortable: true,
      render: (stock: number) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${stock < 20 ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
          }`}>
          {stock} units
        </span>
      ),
    },
    {
      header: "Price",
      accessor: "price",
      sortable: true,
      render: (price: number) => (
        <span className="font-semibold text-gray-900">${price.toFixed(2)}</span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Products</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your product inventory</p>
        </div>
        <Link to="/admin/dashboard/products/add">
          <Button variant="primary" size="sm" className="flex items-center gap-2 bg-[#13458A] hover:bg-[#0f366e]">
            <Plus size={16} /> Add Product
          </Button>
        </Link>
      </div>

      <Card className="p-0 border border-gray-200">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-200 bg-gray-50/50 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-72">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#13458A]/20 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            <Filter size={16} /> Filter
          </button>
        </div>

        {/* Table */}
        {/* Desktop Table */}
        <div className="hidden md:block">
          <Table
            columns={columns}
            data={paginatedProducts}
            onEdit={(row) => console.log("Edit", row)}
            onDelete={(row) => console.log("Delete", row)}
          />
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-gray-200">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 rounded-lg object-cover bg-gray-100"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {product.category}
                  </p>
                </div>
              </div>

              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">
                  ${product.price.toFixed(2)}
                </span>

                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${product.stock < 20
                      ? "bg-red-100 text-red-800"
                      : "bg-green-100 text-green-800"
                    }`}
                >
                  {product.stock} units
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => console.log("Edit", product)}
                  className="flex-1 text-xs py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => console.log("Delete", product)}
                  className="flex-1 text-xs py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 bg-gray-50/50">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </Card>
    </div>
  )
}

export default ProductsManagement
