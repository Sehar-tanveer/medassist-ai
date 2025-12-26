import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { mockAppointments } from "@/lib/mock-data"

/**
 * Patients page
 * Displays list of patients with their information
 */
export default function PatientsPage() {
  // Extract unique patients from appointments
  const uniquePatients = Array.from(
    new Map(
      mockAppointments.map((appointment) => [
        appointment.patientName,
        appointment,
      ])
    ).values()
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
          <p className="text-muted-foreground">
            View and manage patient records
          </p>
        </div>

        {/* Patients Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {uniquePatients.map((patient, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback>
                      {patient.patientName
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-lg">
                      {patient.patientName}
                    </CardTitle>
                    <CardDescription>
                      Patient ID: {patient.id}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted-foreground">Last Appointment: </span>
                    <span className="font-medium">{patient.date}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Doctor: </span>
                    <span className="font-medium">{patient.doctor}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
