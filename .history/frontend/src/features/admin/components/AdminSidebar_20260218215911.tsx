import { useState, type FC } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Home,
  Package,
  Users,
  Settings,
  ShoppingCart,
  Menu,
  X,
  LogOut,
  ChevronRight
} from "lucide-react"

const menu = [
  // { name: "Overview", icon: LayoutDashboard, path: "/admin/dashboard/overview" },
  { name: "Dashboard", icon: Home, path: "/admin/dashboard" },
  { name: "Products", icon: Package, path: "/admin/dashboard/products" },
  { name: "Orders", icon: ShoppingCart, path: "/admin/dashboard/orders" },
  { name: "Users", icon: Users, path: "/admin/dashboard/users" },
  { name: "Settings", icon: Settings, path: "/admin/dashboard/settings" },
]

const AdminSidebar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const SidebarContent = () => (
    <aside className="w-64 bg-[#0b3d2d] text-white h-full flex flex-col shadow-2xl">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-white/10 bg-[#0f4d36]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center shadow-lg">
            <span className="font-bold text-white leading-none">N</span>
          </div>
          <span className="text-lg font-bold tracking-tight text-white/90">NutriCore</span>
        </div>
        <button
          className="md:hidden ml-auto text-white/70 hover:text-white transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        <p className="px-3 text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Menu</p>

        {menu.map(item => {
          const isActive = location.pathname === item.path
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/admin/dashboard"}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `group flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${isActive
                  ? "bg-white/10 text-white shadow-sm border border-white/5"
                  : "text-white/50 hover:bg-white/5 hover:text-white/90"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <item.icon
                  className={`w-5 h-5 transition-colors ${isActive ? "text-green-400" : "text-white/50 group-hover:text-white/80"
                    }`}
                />
                {item.name}
              </div>
              {isActive && <ChevronRight size={14} className="text-white/30" />}
            </NavLink>
          )
        })}
      </nav>

      {/* Footer / User Profile */}
      <div className="p-4 border-t border-white/10 bg-[#0f4d36]">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-green-700 to-green-500 border-2 border-white/10 shadow-sm" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">Admin User</p>
            <p className="text-xs text-white/50 truncate">admin@nutricore.com</p>
          </div>
          <LogOut size={16} className="text-white/30 group-hover:text-white/70 transition-colors" />
        </div>
      </div>
    </aside>

  )

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#0f4d36] text-white p-2.5 rounded-lg shadow-lg hover:bg-[#0d6b48] transition-colors"
        onClick={() => setMobileOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar (Drawer) */}
      <div
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-64 shadow-2xl transition-transform duration-300 ease-out ${mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
      </div>

      {/* Desktop Sidebar (Fixed) */}
      <div className="hidden md:block fixed inset-y-0 left-0 z-30 w-64">
        <SidebarContent />
      </div>
    </>
  )
}

export default AdminSidebar
