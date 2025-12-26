import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"
import { mockReports } from "@/lib/mock-data"

/**
 * Patient Dashboard - Reports Page
 * Shows medical reports with download functionality (UI only)
 */
export default function PatientReportsPage() {
  const getReportTypeColor = (type: "lab" | "imaging" | "pathology") => {
    switch (type) {
      case "lab":
        return "default"
      case "imaging":
        return "secondary"
      case "pathology":
        return "outline"
      default:
        return "default"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Medical Reports</h1>
        <p className="text-muted-foreground">
          View and download your medical reports
        </p>
      </div>

      {/* Reports List */}
      <div className="grid gap-4 md:grid-cols-2">
        {mockReports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                </div>
                <Badge variant={getReportTypeColor(report.type)}>
                  {report.type}
                </Badge>
              </div>
              <CardDescription>
                {report.doctor} • {report.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Status</p>
                  <Badge
                    variant={report.status === "available" ? "success" : "warning"}
                    className="mt-1"
                  >
                    {report.status}
                  </Badge>
                </div>
                {report.status === "available" && (
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
