import { Outlet } from "react-router-dom"
import AdminSidebar from "..//features/admin/components/AdminSidebar"
import AdminTopbar from "@/features/admin/components/AdminTopbar"

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminTopbar />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
