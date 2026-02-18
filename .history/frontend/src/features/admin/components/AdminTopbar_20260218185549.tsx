import { FC } from "react"
import { Bell } from "lucide-react"

const TopBar: FC = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-10">
    <input
      type="text"
      placeholder="Search..."
      className="border rounded-md px-3 py-2 w-1/3"
    />
    <div className="flex items-center gap-4">
      <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
      <div className="w-10 h-10 rounded-full bg-gray-300" />
    </div>
  </header>
)

export default TopBar
