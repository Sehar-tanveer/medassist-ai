import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, User } from "lucide-react"
import { mockAppointments } from "@/lib/mock-data"

/**
 * Doctor Dashboard - Patient Queue Page
 * Shows waiting patients in queue order
 */
export default function DoctorPatientQueuePage() {
  // Filter scheduled and in-progress appointments (queue)
  const queueAppointments = mockAppointments
    .filter((apt) => apt.status === "scheduled" || apt.status === "in-progress")
    .sort((a, b) => {
      // Sort by time
      const timeA = a.time
      const timeB = b.time
      return timeA.localeCompare(timeB)
    })

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Patient Queue</h1>
        <p className="text-muted-foreground">
          Manage your patient queue and appointments
        </p>
      </div>

      {/* Queue Stats */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Waiting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {queueAppointments.filter((apt) => apt.status === "scheduled").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {queueAppointments.filter((apt) => apt.status === "in-progress").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Queue List */}
      <div className="space-y-4">
        {queueAppointments.map((appointment, index) => (
          <Card key={appointment.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{appointment.patientName}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {appointment.time}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={appointment.status === "in-progress" ? "warning" : "default"}
                  >
                    {appointment.status === "in-progress" ? "In Progress" : "Waiting"}
                  </Badge>
                  {appointment.status === "scheduled" && (
                    <Button size="sm">Start</Button>
                  )}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
