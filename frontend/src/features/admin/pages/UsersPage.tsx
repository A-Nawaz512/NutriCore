import { FC } from "react"
import Table from "../../../shared/components/ui/Table"
import Card from "../../../shared/components/ui/Card"
import Button from "../../../shared/components/ui/Button"

const UsersPage: FC = () => {
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", lastActivity: "2026-02-17" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", lastActivity: "2026-02-16" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User", lastActivity: "2026-02-15" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", role: "User", lastActivity: "2026-02-14" },
    { id: 5, name: "Ethan Hunt", email: "ethan@example.com", role: "User", lastActivity: "2026-02-13" },
  ]

  const columns = [
  {
    header: "User",
    accessor: "name",
    render: (name: string, row: any) => (
      <div className="flex flex-col">
        <span className="font-medium text-gray-900">{name}</span>
        <span className="text-xs text-gray-500">{row.email}</span>
      </div>
    ),
  },
  {
    header: "Role",
    accessor: "role",
    render: (role: string) => (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          role === "Admin"
            ? "bg-green-100 text-green-800"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        {role}
      </span>
    ),
  },
  {
    header: "Last Activity",
    accessor: "lastActivity",
    render: (date: string) => (
      <span className="text-sm text-gray-600">{date}</span>
    ),
  },
]


  const handleEdit = (user: any) => console.log("Edit", user)
  const handleDelete = (user: any) => console.log("Deactivate", user)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage platform users and permissions
          </p>
        </div>
        <Button variant="primary" size="sm">
          + Add User
        </Button>
      </div>

      <Card className="p-0 border border-gray-200">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <Table
            columns={columns}
            data={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden divide-y divide-gray-200">
          {users.map((user) => (
            <div key={user.id} className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {user.name}
                </h3>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${user.role === "Admin"
                      ? "bg-[#25492D]/10 text-[#25492D]"
                      : "bg-gray-100 text-gray-700"
                    }`}
                >
                  {user.role}
                </span>

                <span className="text-xs text-gray-500">
                  {user.lastActivity}
                </span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => handleEdit(user)}
                  className="flex-1 text-xs py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(user)}
                  className="flex-1 text-xs py-2 rounded-lg border border-red-200 text-red-600 hover:bg-red-50 transition"
                >
                  Deactivate
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )

}

export default UsersPage
