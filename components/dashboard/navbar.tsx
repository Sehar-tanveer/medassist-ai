"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, LogOut, Settings, UserCog } from "lucide-react"
import { getUserRole, setUserRole, getDashboardPath, type UserRole } from "@/lib/role-utils"

/**
 * Top navbar component
 * Displays project name, role switcher, and user profile dropdown
 */
export function Navbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [role, setRoleState] = useState<UserRole>("admin")
  const [userInfo, setUserInfo] = useState({ name: "Admin User", email: "admin@medassist.com", initials: "AD" })

  useEffect(() => {
    // Get role from localStorage and update UI accordingly
    const currentRole = getUserRole()
    setRoleState(currentRole)
    
    // Update user info based on role
    switch (currentRole) {
      case "patient":
        setUserInfo({ name: "Patient User", email: "patient@medassist.com", initials: "PU" })
        break
      case "doctor":
        setUserInfo({ name: "Dr. Sarah Johnson", email: "doctor@medassist.com", initials: "SJ" })
        break
      case "admin":
        setUserInfo({ name: "Admin User", email: "admin@medassist.com", initials: "AD" })
        break
    }
  }, [])

  const handleRoleChange = (newRole: UserRole) => {
    setUserRole(newRole)
    setRoleState(newRole)
    
    // Update user info
    switch (newRole) {
      case "patient":
        setUserInfo({ name: "Patient User", email: "patient@medassist.com", initials: "PU" })
        break
      case "doctor":
        setUserInfo({ name: "Dr. Sarah Johnson", email: "doctor@medassist.com", initials: "SJ" })
        break
      case "admin":
        setUserInfo({ name: "Admin User", email: "admin@medassist.com", initials: "AD" })
        break
    }
    
    // Dispatch custom event to notify sidebar of role change
    window.dispatchEvent(new Event("roleChanged"))
    
    // Navigate to the appropriate dashboard
    router.push(getDashboardPath(newRole))
  }

  const getRoleDisplayName = (r: UserRole) => {
    switch (r) {
      case "patient":
        return "Patient"
      case "doctor":
        return "Doctor"
      case "admin":
        return "Admin"
    }
  }

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <h2 className="text-lg font-semibold">MedAssist Dashboard</h2>
        </Link>
        <span className="text-xs text-muted-foreground">({getRoleDisplayName(role)})</span>
      </div>

      <div className="flex items-center gap-4">
        {/* Role Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
              <UserCog className="h-4 w-4" />
              <span>Switch Role</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Switch Role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => handleRoleChange("patient")}
              className={role === "patient" ? "bg-accent" : ""}
            >
              Patient
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleRoleChange("doctor")}
              className={role === "doctor" ? "bg-accent" : ""}
            >
              Doctor
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleRoleChange("admin")}
              className={role === "admin" ? "bg-accent" : ""}
            >
              Admin
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-ring">
              <Avatar>
                <AvatarFallback>{userInfo.initials}</AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userInfo.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {userInfo.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                setUserRole("admin") // Reset to default
                router.push("/")
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
