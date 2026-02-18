import { FC } from "react"
import Table from "../../../shared/components/ui/Table"
import Card from "../../../shared/components/ui/Card"
import Pagination from "../../../shared/components/ui/Pagination"

const OrdersPage: FC = () => {
  const orders = [
    { id: 101, user: "Alice", total: 50, status: "Pending", date: "2026-02-18" },
    { id: 102, user: "Bob", total: 120, status: "Shipped", date: "2026-02-17" },
    { id: 103, user: "Charlie", total: 75, status: "Delivered", date: "2026-02-16" },
  ]

  const statusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-200 text-yellow-800"
      case "Shipped":
        return "bg-blue-200 text-blue-800"
      case "Delivered":
        return "bg-green-200 text-green-800"
      default:
        return ""
    }
  }

  const columns = [
    { header: "Order ID", accessor: "id" },
    { header: "User", accessor: "user" },
    { header: "Total ($)", accessor: "total", render: (total: number) => `$${total.toFixed(2)}` },
    { 
      header: "Status", 
      accessor: "status",
      render: (status: string) => (
        <span className={`px-2 py-1 rounded-full text-sm ${statusColor(status)}`}>
          {status}
        </span>
      )
    },
    { header: "Date", accessor: "date" },
  ]

  const handleView = (order: any) => {
    console.log("View order:", order)
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>

      <Card className="p-4 space-y-4">
        {/* Shared Table */}
        <Table columns={columns} data={orders} onEdit={handleView} />

        {/* Pagination */}
        <Pagination currentPage={1} totalPages={3} onPageChange={(page) => console.log("Change page:", page)} />
      </Card>
    </>
  )
}

export default OrdersPage
