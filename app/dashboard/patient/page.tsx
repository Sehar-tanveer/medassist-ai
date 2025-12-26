import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import { mockAppointments } from "@/lib/mock-data"

/**
 * Patient Dashboard - Overview Page
 * Shows upcoming appointment and quick overview
 */
export default function PatientOverviewPage() {
  // Get next upcoming appointment
  const upcomingAppointment = mockAppointments
    .filter((apt) => apt.status === "scheduled")
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`)
      const dateB = new Date(`${b.date} ${b.time}`)
      return dateA.getTime() - dateB.getTime()
    })[0]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your health overview.
        </p>
      </div>

      {/* Upcoming Appointment Card */}
      {upcomingAppointment ? (
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Appointment</CardTitle>
            <CardDescription>Your next scheduled visit</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{upcomingAppointment.doctor}</p>
                  <p className="text-sm text-muted-foreground">
                    {upcomingAppointment.date} at {upcomingAppointment.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="default">Scheduled</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No Upcoming Appointments</CardTitle>
            <CardDescription>You don't have any scheduled appointments</CardDescription>
          </CardHeader>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockAppointments.length}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Prescriptions</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Reports</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Ready to download</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
