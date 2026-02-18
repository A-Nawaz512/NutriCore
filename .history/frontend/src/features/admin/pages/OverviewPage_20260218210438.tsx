import { FC } from "react"
import DashboardCard from "../components/DashboardCard"

const OverviewPage: FC = () => {
  const stats = [
    { title: "Total Orders", value: 120, color: "bg-emerald-600" },
    { title: "Products", value: 85, color: "bg-green-600" },
    { title: "Users", value: 40, color: "bg-teal-600" },
    { title: "Revenue", value: "$12.4K", color: "bg-lime-600" },
  ]

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-[#0b3d2d]">
        Overview
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            color={stat.color}
          />
        ))}
      </div>
    </>
  )
}

export default OverviewPage
