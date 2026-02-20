import type { FC } from "react"
import clsx from "clsx"

interface AdminSidebarProps {
  isOpen: boolean
  closeSidebar: () => void
  className?: string
}

const AdminSidebar: FC<AdminSidebarProps> = ({
  isOpen,
  closeSidebar,
  className
}) => {
  return (
    <aside
      className={clsx(
        "w-64 bg-white shadow-lg transition-transform duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        className
      )}
    >
      <button onClick={closeSidebar} className="md:hidden p-4">
        Close
      </button>

      {/* Sidebar Content */}
    </aside>
  )
}

export default AdminSidebar