import DashboardLayout from "../../../shared/components/layout/AdminLayout"
import { FC } from "react"
import { Card } from "/shared/components/ui"
import { Users, Box, ShoppingCart, DollarSign, TrendingUp, PieChart } from "lucide-react"

const DashboardPage: FC = () => {
  // Dummy statistics
  const stats = [
    { title: "Total Users", value: 1200, icon: <Users size={28} className="text-[#13458A]" /> },
    { title: "Products", value: 350, icon: <Box size={28} className="text-[#13458A]" /> },
    { title: "Orders", value: 540, icon: <ShoppingCart size={28} className="text-[#13458A]" /> },
    { title: "Revenue", value: "$24,500", icon: <DollarSign size={28} className="text-[#13458A]" /> },
  ]

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Overview of your NutriCore store</p>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="flex items-center justify-between p-6 shadow-md hover:shadow-lg transition-shadow">
              <div>
                <p className="text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div>{stat.icon}</div>
            </Card>
          ))}
        </div>

        {/* Charts / Insights Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Sales Chart */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Sales Trend</h2>
              <TrendingUp className="text-[#13458A] w-5 h-5" />
            </div>
            <div className="h-60 bg-gray-100 flex items-center justify-center rounded-md">
              {/* Replace with chart library like Recharts or Chart.js */}
              <span className="text-gray-400">[Sales Line Chart]</span>
            </div>
          </Card>

          {/* Orders & Category Breakdown */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Orders by Category</h2>
              <PieChart className="text-[#13458A] w-5 h-5" />
            </div>
            <div className="h-60 bg-gray-100 flex items-center justify-center rounded-md">
              {/* Replace with chart library */}
              <span className="text-gray-400">[Orders Pie Chart]</span>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-4 flex flex-col items-center justify-center hover:bg-green-50 cursor-pointer transition">
            <Box size={28} className="text-[#13458A]" />
            <p className="mt-2 font-medium text-gray-700">Add Product</p>
          </Card>
          <Card className="p-4 flex flex-col items-center justify-center hover:bg-green-50 cursor-pointer transition">
            <ShoppingCart size={28} className="text-[#13458A]" />
            <p className="mt-2 font-medium text-gray-700">Manage Orders</p>
          </Card>
          <Card className="p-4 flex flex-col items-center justify-center hover:bg-green-50 cursor-pointer transition">
            <Users size={28} className="text-[#13458A]" />
            <p className="mt-2 font-medium text-gray-700">Manage Users</p>
          </Card>
          <Card className="p-4 flex flex-col items-center justify-center hover:bg-green-50 cursor-pointer transition">
            <DollarSign size={28} className="text-[#13458A]" />
            <p className="mt-2 font-medium text-gray-700">View Revenue</p>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage
