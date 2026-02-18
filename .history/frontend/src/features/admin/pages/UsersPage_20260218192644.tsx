import Table from "../../../shared/components/ui/Table"
import Card from "../../../shared/components/ui/Card"
import Button from "../../../shared/components/ui/Button"

const UsersPage: FC = () => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin", lastActivity: "2026-02-17" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "User", lastActivity: "2026-02-16" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "User", lastActivity: "2026-02-15" },
  ]

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { 
      header: "Role", 
      accessor: "role",
      render: (role: string) => (
        <span className={`px-2 py-1 rounded-full text-sm ${role === "Admin" ? "bg-purple-200 text-purple-800" : "bg-gray-200 text-gray-800"}`}>
          {role}
        </span>
      )
    },
    { header: "Last Activity", accessor: "lastActivity" },
  ]

  const handleEdit = (user: any) => console.log("Edit", user)
  const handleDelete = (user: any) => console.log("Deactivate", user)

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <Card className="p-4">
        <Table columns={columns} data={users} onEdit={handleEdit} onDelete={handleDelete} />
      </Card>
    </>
  )
}

export default UsersPage
