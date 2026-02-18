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
      return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage and track customer orders
          </p>
        </div>

        <Card className="p-0 border border-gray-200">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <Table columns={columns} data={orders} onEdit={handleView} />
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-200">
            {orders.map((order) => (
              <div key={order.id} className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      Order #{order.id}
                    </h3>
                    <p className="text-xs text-gray-500">{order.user}</p>
                  </div>

                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-600">
                  <span>${order.total.toFixed(2)}</span>
                  <span>{order.date}</span>
                </div>

                <button
                  onClick={() => handleView(order)}
                  className="w-full text-xs py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  View Order
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-gray-200 bg-gray-50/50">
            <Pagination
              currentPage={1}
              totalPages={3}
              onPageChange={(page) => console.log("Change page:", page)}
            />
          </div>
        </Card>
      </div>
      )

    </>
  )
}

export default OrdersPage
