import { FC } from "react"
import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowUpRight
} from "lucide-react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from "recharts"
import Card from "../../../shared/components/ui/Card"

// --- Dummy Data ---
const revenueData = [
  { name: "Mon", revenue: 4000 },
  { name: "Tue", revenue: 3000 },
  { name: "Wed", revenue: 5000 },
  { name: "Thu", revenue: 2780 },
  { name: "Fri", revenue: 1890 },
  { name: "Sat", revenue: 2390 },
  { name: "Sun", revenue: 3490 },
]

const categoryData = [
  { name: "Vitamins", value: 400 },
  { name: "Protein", value: 300 },
  { name: "Omega", value: 300 },
  { name: "Minerals", value: 200 },
]

const stockData = [
  { name: "Vit C", stock: 12 },
  { name: "Iron", stock: 8 },
  { name: "Zinc", stock: 15 },
  { name: "B12", stock: 5 },
  { name: "D3", stock: 18 },
]

const COLORS = ["#0b3d2d", "#166534", "#22c55e", "#86efac"]

const DashboardPage: FC = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$24,500",
      trend: "+12%",
      icon: DollarSign,
      color: "bg-emerald-50 text-emerald-700",
      trendUp: true
    },
    {
      title: "Total Orders",
      value: "540",
      trend: "+5%",
      icon: ShoppingCart,
      color: "bg-green-50 text-green-700",
      trendUp: true
    },
    {
      title: "Products",
      value: "350",
      trend: "-2%",
      icon: Package,
      color: "bg-lime-50 text-lime-700",
      trendUp: false
    },
    {
      title: "Active Users",
      value: "1,200",
      trend: "+18%",
      icon: Users,
      color: "bg-teal-50 text-teal-700",
      trendUp: true
    },
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0b3d2d]">Overview</h1>
          <p className="text-gray-500 text-sm">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b3d2d]/20">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Month</option>
          </select>
          <button className="bg-[#0b3d2d] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#07281d] transition-colors shadow-sm flex items-center gap-2">
            <ArrowUpRight size={16} /> Export Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Card key={idx} className="p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon size={20} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex items-center gap-1 ${stat.trendUp ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}>
                {stat.trendUp ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {stat.trend}
              </span>
              <span className="text-xs text-gray-400">vs last period</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <Card className="lg:col-span-2 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Revenue Trend</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0b3d2d" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#0b3d2d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} tickFormatter={(val) => `$${val}`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  formatter={(value: number) => [`$${value}`, "Revenue"]}
                />
                <Area type="monotone" dataKey="revenue" stroke="#13458A" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Category Pie Chart */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Sales by Category</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Low Stock Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Low Stock Alerts</h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stockData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E5E7EB" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={60} tick={{ fill: '#4B5563', fontSize: 12 }} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', borderColor: '#FECACA' }} />
                <Bar dataKey="stock" fill="#EF4444" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all cursor-pointer group border-l-4 border-[#13458A]">
            <div className="p-4 bg-blue-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <Package size={24} className="text-[#13458A]" />
            </div>
            <h4 className="font-semibold text-gray-800">Add New Product</h4>
            <p className="text-xs text-gray-500 mt-1">Update inventory</p>
          </Card>
          <Card className="p-6 flex flex-col items-center justify-center text-center hover:shadow-lg transition-all cursor-pointer group border-l-4 border-green-500">
            <div className="p-4 bg-green-50 rounded-full mb-3 group-hover:scale-110 transition-transform">
              <ShoppingCart size={24} className="text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800">View Orders</h4>
            <p className="text-xs text-gray-500 mt-1">Check new orders</p>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
