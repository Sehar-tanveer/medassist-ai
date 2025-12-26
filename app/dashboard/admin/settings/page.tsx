import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

/**
 * Admin Dashboard - System Settings Page
 * Application settings and configuration
 */
export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">System Settings</h1>
        <p className="text-muted-foreground">
          Manage your application settings and preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
            <CardDescription>
              Configure general application settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Application Name</label>
              <input
                type="text"
                defaultValue="MedAssist"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                disabled
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Language</label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>
              Manage how you receive notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Email Notifications</p>
                <p className="text-xs text-muted-foreground">
                  Receive email updates about appointments
                </p>
              </div>
              <input type="checkbox" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Push Notifications</p>
                <p className="text-xs text-muted-foreground">
                  Receive push notifications for new messages
                </p>
              </div>
              <input type="checkbox" defaultChecked />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Information</CardTitle>
            <CardDescription>
              View system details and version information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Version</span>
              <span className="text-sm font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Environment</span>
              <span className="text-sm font-medium">Development</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
