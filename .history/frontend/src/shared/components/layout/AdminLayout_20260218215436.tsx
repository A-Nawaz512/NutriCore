import type { FC, useState } from "react"
import { Outlet } from "react-router-dom"
import AdminSidebar from "../../../features/admin/components/AdminSidebar"
import { Menu } from "lucide-react"

const AdminLayout: FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar
        isOpen={sidebarOpen}
        closeSidebar={() => setSidebarOpen(false)}
        className="fixed md:static top-0 left-0 z-30 h-full transition-transform transform md:translate-x-0"
      />

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/30 z-20 md:hidden"
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen md:ml-64 transition-all duration-300">
        {/* Mobile Top Bar */}
        <header className="md:hidden flex items-center justify-between bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-20">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <Menu size={20} />
          </button>

          <span className="font-semibold text-gray-800 text-sm">
            Admin Panel
          </span>

          <div className="w-6" /> {/* Spacer */}
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
