import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertCircle, Calendar, User } from "lucide-react"
import { mockFollowUpAlerts } from "@/lib/mock-data"

/**
 * Doctor Dashboard - Follow-Up Alerts Page
 * Shows patients requiring follow-up attention
 */
export default function DoctorFollowUpAlertsPage() {
  const getPriorityColor = (priority: "high" | "medium" | "low") => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "warning"
      case "low":
        return "default"
      default:
        return "default"
    }
  }

  // Sort by priority (high first)
  const sortedAlerts = [...mockFollowUpAlerts].sort((a, b) => {
    const priorityOrder = { high: 0, medium: 1, low: 2 }
    return priorityOrder[a.priority] - priorityOrder[b.priority]
  })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Follow-Up Alerts</h1>
        <p className="text-muted-foreground">
          Patients requiring follow-up attention
        </p>
      </div>

      {/* Alert Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sortedAlerts.filter((a) => a.priority === "high").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Medium Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sortedAlerts.filter((a) => a.priority === "medium").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Low Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {sortedAlerts.filter((a) => a.priority === "low").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts List */}
      <div className="space-y-4">
        {sortedAlerts.map((alert) => (
          <Card key={alert.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{alert.patientName}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Calendar className="h-3 w-3" />
                      Due: {alert.dueDate}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant={getPriorityColor(alert.priority)}>
                  {alert.priority.toUpperCase()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium">Reason</p>
                  <p className="text-sm text-muted-foreground">{alert.reason}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Schedule Follow-Up</Button>
                  <Button size="sm" variant="outline">View Patient</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
