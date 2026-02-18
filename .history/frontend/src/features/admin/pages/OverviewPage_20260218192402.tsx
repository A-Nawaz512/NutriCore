import { FC } from "react"
import DashboardLayout from "../../../shared/components/layout/AdminLayout"
import DashboardCard from "../components/DashboardCard"

const OverviewPage: FC = () => {
  const stats = [
    { title: "Total Orders", value: 120, color: "bg-blue-500" },
    { title: "Products", value: 85, color: "bg-green-500" },
    { title: "Users", value: 40, color: "bg-purple-500" },
    { title: "Revenue", value: "$12.4K", color: "bg-yellow-500" },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Overview</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <DashboardCard key={stat.title} title={stat.title} value={stat.value} color={stat.color} />
        ))}
      </div>
    </>
  )
}

export default OverviewPage
