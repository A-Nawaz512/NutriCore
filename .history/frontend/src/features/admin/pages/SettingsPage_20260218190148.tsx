import DashboardLayout from "../../../shared/components/layout/AdminLayout"
import { FC } from "react"
import Textarea from "../../../shared/components/ui"

const SettingsPage: FC = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Profile Card */}
      <Card className="p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="space-y-4">
          <Input name="name" placeholder="Full Name" />
          <Input name="email" placeholder="Email Address" />
          <Input name="password" type="password" placeholder="New Password" />
          <Button variant="primary">Update Profile</Button>
        </div>
      </Card>

      {/* Platform Settings Card */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Platform Settings</h2>
        <div className="space-y-4">
          <Input name="contactEmail" placeholder="Contact Email" />
          <Textarea name="contactMessage" placeholder="Contact Message" />
          <Button variant="primary">Save Settings</Button>
        </div>
      </Card>
    </DashboardLayout>
  )
}

export default SettingsPage
