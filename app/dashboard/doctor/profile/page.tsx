import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react"

/**
 * Doctor Dashboard - Profile Page
 * Shows doctor profile information
 */
export default function DoctorProfilePage() {
  // Mock doctor profile data
  const doctorProfile = {
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@medassist.com",
    phone: "+1 (555) 123-4567",
    specialty: "Cardiology",
    location: "Main Hospital - Floor 3",
    joinDate: "2020-01-15",
    status: "available",
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">
          Manage your profile and account settings
        </p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20">
              <AvatarFallback className="text-2xl">SJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-2xl">{doctorProfile.name}</CardTitle>
              <CardDescription className="mt-1">
                <Badge variant="secondary" className="mr-2">
                  {doctorProfile.specialty}
                </Badge>
                <Badge variant={doctorProfile.status === "available" ? "success" : "warning"}>
                  {doctorProfile.status}
                </Badge>
              </CardDescription>
            </div>
            <Button>Edit Profile</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{doctorProfile.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">{doctorProfile.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">{doctorProfile.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Joined</p>
                <p className="text-sm text-muted-foreground">{doctorProfile.joinDate}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Account Settings</CardTitle>
          <CardDescription>Manage your account preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive email updates</p>
            </div>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">SMS Notifications</p>
              <p className="text-xs text-muted-foreground">Receive SMS alerts</p>
            </div>
            <input type="checkbox" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}
