import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { mockAppointments } from "@/lib/mock-data"

/**
 * Patient Dashboard - My Appointments Page
 * Shows all appointments for the current patient
 */
export default function PatientAppointmentsPage() {
  const getStatusBadgeVariant = (
    status: "scheduled" | "completed" | "cancelled" | "in-progress"
  ) => {
    switch (status) {
      case "scheduled":
        return "default"
      case "completed":
        return "success"
      case "cancelled":
        return "destructive"
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
        <h1 className="text-3xl font-bold tracking-tight">My Appointments</h1>
        <p className="text-muted-foreground">
          View and manage your appointments
        </p>
      </div>

      {/* Appointments Table */}
      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Doctor</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">
                  {appointment.doctor}
                </TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>
                  <Badge variant={getStatusBadgeVariant(appointment.status)}>
                    {appointment.status.charAt(0).toUpperCase() +
                      appointment.status.slice(1).replace("-", " ")}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
