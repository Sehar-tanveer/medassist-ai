import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calendar } from "lucide-react"
import { mockMedicalSummaries } from "@/lib/mock-data"

/**
 * Doctor Dashboard - AI Medical Summaries Page
 * Shows AI-generated medical summaries for appointments
 */
export default function DoctorMedicalSummariesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Medical Summaries</h1>
        <p className="text-muted-foreground">
          AI-generated summaries of patient appointments and consultations
        </p>
      </div>

      {/* Summaries List */}
      <div className="space-y-4">
        {mockMedicalSummaries.map((summary) => (
          <Card key={summary.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{summary.patientName}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Calendar className="h-3 w-3" />
                    {summary.date}
                  </CardDescription>
                </div>
                <Badge variant="secondary">AI Generated</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <p className="text-sm leading-relaxed">{summary.summary}</p>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">
                    Appointment ID: {summary.appointmentId}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
