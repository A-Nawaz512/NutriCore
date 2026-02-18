import DashboardLayout from "../../../shared/components/"
import { FC } from "react"
import Table from "../../../shared/components/ui/Table"
import Card from "../../../shared/components/ui/Card"
import Button from "../../../shared/components/ui/Button"

const UsersPage: FC = () => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "Admin", lastActivity: "2026-02-17" },
    { id: 2, name: "Bob", email: "bob@example.com", role: "User", lastActivity: "2026-02-16" },
    { id: 3, name: "Charlie", email: "charlie@example.com", role: "User", lastActivity: "2026-02-15" },
  ]

  const roleColor = (role: string) => role === "Admin" ? "bg-purple-200 text-purple-800" : "bg-gray-200 text-gray-800"

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Users</h1>

      <Card className="p-4">
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Last Activity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  <span className={`px-2 py-1 rounded-full text-sm ${roleColor(u.role)}`}>
                    {u.role}
                  </span>
                </td>
                <td>{u.lastActivity}</td>
                <td className="flex gap-2">
                  <Button variant="secondary" size="sm">Edit</Button>
                  <Button variant="destructive" size="sm">Deactivate</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </DashboardLayout>
  )
}

export default UsersPage
