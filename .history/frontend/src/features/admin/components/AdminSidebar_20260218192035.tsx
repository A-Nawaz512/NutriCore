import { FC } from "react"
import { NavLink } from "react-router-dom"
import { Home, Package, Users, Settings, ShoppingCart } from "lucide-react"

const menu = [
  { name: "Overview", icon: Home, path: "/admin/dashboard/overview" },
  { name: "Dashboard", icon: Home, path: "/admin/dashboard" }, // optional main dashboard
  { name: "Products", icon: Package, path: "/admin/dashboard/products" },
  { name: "Orders", icon: ShoppingCart, path: "/admin/dashboard/orders" },
  { name: "Users", icon: Users, path: "/admin/dashboard/users" },
  { name: "Settings", icon: Settings, path: "/admin/dashboard/settings" },
]

const Sidebar: FC = () => (
  <aside className="w-64 bg-[#13458A] text-white h-screen flex flex-col p-6">
    <h1 className="text-xl font-bold mb-10">NutriCore Admin</h1>
    <nav className="flex-1 space-y-4">
      {menu.map(item => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded hover:bg-[#0f2e61] transition-colors ${
              isActive ? "bg-[#0f2e61]" : ""
            }`
          }
        >
          <item.icon className="w-5 h-5" />
          {item.name}
        </NavLink>
      ))}
    </nav>
  </aside>
)

export default Sidebar
