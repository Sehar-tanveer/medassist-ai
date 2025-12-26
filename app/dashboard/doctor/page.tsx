import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import { mockAppointments } from "@/lib/mock-data"

/**
 * Doctor Dashboard - Today's Appointments Page
 * Shows appointments scheduled for today
 */
export default function DoctorTodayAppointmentsPage() {
  // Filter today's appointments (mock: using current date from mock data)
  const todaysAppointments = mockAppointments.filter(
    (apt) => apt.date === "2024-03-15" && apt.status !== "cancelled"
  )

  const getStatusBadgeVariant = (
    status: "scheduled" | "completed" | "cancelled" | "in-progress"
  ) => {
    switch (status) {
      case "scheduled":
        return "default"
      case "completed":
        return "success"
      case "in-progress":
        return "warning"
      default:
        return "default"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Today's Appointments</h1>
        <p className="text-muted-foreground">
          Your schedule for today - {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Today</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{todaysAppointments.length}</div>
            <p className="text-xs text-muted-foreground">Appointments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todaysAppointments.filter((apt) => apt.status === "in-progress").length}
            </div>
            <p className="text-xs text-muted-foreground">Currently seeing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {todaysAppointments.filter((apt) => apt.status === "completed").length}
            </div>
            <p className="text-xs text-muted-foreground">Finished</p>
          </CardContent>
        </Card>
      </div>

      {/* Appointments List */}
      <div className="grid gap-4">
        {todaysAppointments.length > 0 ? (
          todaysAppointments.map((appointment) => (
            <Card key={appointment.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">{appointment.patientName}</CardTitle>
                    <CardDescription>{appointment.time}</CardDescription>
                  </div>
                  <Badge variant={getStatusBadgeVariant(appointment.status)}>
                    {appointment.status.charAt(0).toUpperCase() +
                      appointment.status.slice(1).replace("-", " ")}
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              No appointments scheduled for today
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
