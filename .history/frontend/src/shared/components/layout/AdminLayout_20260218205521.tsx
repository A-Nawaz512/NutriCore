import { FC } from "react"
import { Outlet } from "react-router-dom"
import AdminSidebar from "../../../features/admin/components/"

const AdminLayout: FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 md:ml-64 transition-all duration-300 min-h-screen">
        <main className="p-4 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
