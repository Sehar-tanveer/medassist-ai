import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockPrescriptions } from "@/lib/mock-data"

/**
 * Patient Dashboard - Prescriptions Page
 * Shows all prescriptions (read-only list)
 */
export default function PatientPrescriptionsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Prescriptions</h1>
        <p className="text-muted-foreground">
          View your current and past prescriptions
        </p>
      </div>

      {/* Prescriptions List */}
      <div className="grid gap-4 md:grid-cols-2">
        {mockPrescriptions.map((prescription) => (
          <Card key={prescription.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{prescription.medication}</CardTitle>
                <Badge variant={prescription.status === "active" ? "default" : "secondary"}>
                  {prescription.status}
                </Badge>
              </div>
              <CardDescription>Prescribed by {prescription.doctor}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Dosage</p>
                  <p className="text-sm text-muted-foreground">{prescription.dosage}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Frequency</p>
                  <p className="text-sm text-muted-foreground">{prescription.frequency}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Date Prescribed</p>
                  <p className="text-sm text-muted-foreground">{prescription.date}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
