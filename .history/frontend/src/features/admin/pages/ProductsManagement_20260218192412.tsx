import { FC } from "react"
import Table from "../../../shared/components/ui/Table"
import Card from "../../../shared/components/ui/Card"
import Button from "../../../shared/components/ui/Button"
import Pagination from "../../../shared/components/ui/Pagination"


const ProductsPage: FC = () => {
  const products = [
    { id: 1, name: "Vitamin C", category: "Vitamins", stock: 50, price: 19.99 },
    { id: 2, name: "Omega 3", category: "Supplements", stock: 30, price: 29.99 },
    { id: 3, name: "Protein Powder", category: "Nutrition", stock: 15, price: 49.99 },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <Card className="p-4">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.stock}</td>
                <td>${p.price}</td>
                <td className="flex gap-2">
                  <Button variant="secondary" size="sm">Edit</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />
      </Card>
    </>
  )
}

export default ProductsPage
