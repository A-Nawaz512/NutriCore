import { FC } from "react"

interface DashboardCardProps {
  title: string
  value: string | number
  color: string
}

const DashboardCard: FC<DashboardCardProps> = ({ title, value, color }) => (
  <div className={`p-6 rounded-xl text-white shadow-md ${color}`}>
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="text-2xl font-bold mt-2">{value}</p>
  </div>
)

export default DashboardCard
