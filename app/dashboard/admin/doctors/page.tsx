import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { mockDoctors } from "@/lib/mock-data"
import { Circle } from "lucide-react"

/**
 * Admin Dashboard - Doctors Management Page
 * Displays list of doctors with their specialties and availability
 */
export default function AdminDoctorsPage() {
  const getAvailabilityColor = (
    availability: "available" | "busy" | "offline"
  ) => {
    switch (availability) {
      case "available":
        return "bg-green-500"
      case "busy":
        return "bg-yellow-500"
      case "offline":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  const getAvailabilityText = (
    availability: "available" | "busy" | "offline"
  ) => {
    switch (availability) {
      case "available":
        return "Available"
      case "busy":
        return "Busy"
      case "offline":
        return "Offline"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Doctors Management</h1>
        <p className="text-muted-foreground">
          View and manage all doctors and their availability status
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockDoctors.map((doctor) => (
          <Card key={doctor.id}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>
                    {doctor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg">{doctor.name}</CardTitle>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary">{doctor.specialty}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Circle
                  className={`h-3 w-3 ${getAvailabilityColor(doctor.availability)} rounded-full`}
                />
                <span className="text-sm text-muted-foreground">
                  {getAvailabilityText(doctor.availability)}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
