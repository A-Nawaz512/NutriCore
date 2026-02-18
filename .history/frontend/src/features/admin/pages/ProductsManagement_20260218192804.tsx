import { FC } from "react"
import Table from "../../../shared/components/ui/Table"
import Card from "../../../shared/components/ui/Card"
import Pagination from "../../../shared/components/ui/Pagination"

const ProductsPage: FC = () => {
  const products = [
    { id: 1, name: "Vitamin C", category: "Vitamins", stock: 50, price: 19.99 },
    { id: 2, name: "Omega 3", category: "Supplements", stock: 30, price: 29.99 },
    { id: 3, name: "Protein Powder", category: "Nutrition", stock: 15, price: 49.99 },
  ]

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Category", accessor: "category" },
    { header: "Stock", accessor: "stock" },
    { 
      header: "Price ($)", 
      accessor: "price",
      render: (price: number) => `$${price.toFixed(2)}`
    },
  ]

  const handleEdit = (product: any) => {
    console.log("Edit product:", product)
  }

  const handleDelete = (product: any) => {
    console.log("Delete product:", product)
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <Card className="p-4 space-y-4">
        {/* Shared Table */}
        <Table columns={columns} data={products} onEdit={handleEdit} onDelete={handleDelete} />

        {/* Pagination */}
        <Pagination currentPage={1} totalPages={3} onPageChange={(page) => console.log("Change page:", page)} />
      </Card>
    </>
  )
}

export default ProductsPage
