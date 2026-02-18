import { FC, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  Home,
  Package,
  Users,
  Settings,
  ShoppingCart,
  LayoutDashboard,
  Menu,
  X,
  LogOut,
  ChevronRight
} from "lucide-react"

const menu = [
  { name: "Overview", icon: LayoutDashboard, path: "/admin/dashboard/overview" },
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
    
  )

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#13458A] text-white p-2.5 rounded-lg shadow-lg hover:bg-[#0f366e] transition-colors"
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
        <SidebarContent />
      </div>

      {/* Desktop Sidebar (Fixed) */}
      <div className="hidden md:block fixed inset-y-0 left-0 z-30 w-64">
        <SidebarContent />
      </div>
    </>
  )
}

export default AdminSidebar
