import DashboardLayout from "../../../shared/components/layout/AdminLayout"
import { FC } from "react"
import Table from "../../../shared/components/ui/Table"
import Card from "../../../shared/components/ui/Card"
import Button from "../../../shared/components/ui/Button"
import Pagination from "../../../shared/components/ui/Pagination"

const OrdersPage: FC = () => {
  const orders = [
    { id: 101, user: "Alice", total: "$50", status: "Pending", date: "2026-02-18" },
    { id: 102, user: "Bob", total: "$120", status: "Shipped", date: "2026-02-17" },
    { id: 103, user: "Charlie", total: "$75", status: "Delivered", date: "2026-02-16" },
  ]

  const statusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-200 text-yellow-800"
      case "Shipped": return "bg-blue-200 text-blue-800"
      case "Delivered": return "bg-green-200 text-green-800"
      default: return ""
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <Card className="p-4">
        <Table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User</th>
              <th>Total</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(o => (
              <tr key={o.id}>
                <td>{o.id}</td>
                <td>{o.user}</td>
                <td>{o.total}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-sm ${statusColor(o.status)}`}>
                    {o.status}
                  </span>
                </td>
                <td>{o.date}</td>
                <td>
                  <Button variant="secondary" size="sm">View</Button>
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

export default OrdersPage
