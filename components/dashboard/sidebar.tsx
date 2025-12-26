"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
  LayoutDashboard,
  Calendar,
  Users,
  UserCheck,
  MessageSquare,
  Settings,
  FileText,
  FileDown,
  Bot,
  ClipboardList,
  AlertCircle,
  User,
  BarChart3,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { getUserRole, type UserRole } from "@/lib/role-utils"

/**
 * Navigation item interface
 */
interface NavItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  roles: UserRole[] // Which roles can see this item
}

/**
 * All possible navigation items
 * Items are filtered based on user role
 */
const allNavigationItems: NavItem[] = [
  // Patient navigation
  {
    name: "Overview",
    href: "/dashboard/patient",
    icon: LayoutDashboard,
    roles: ["patient"],
  },
  {
    name: "My Appointments",
    href: "/dashboard/patient/appointments",
    icon: Calendar,
    roles: ["patient"],
  },
  {
    name: "Prescriptions",
    href: "/dashboard/patient/prescriptions",
    icon: FileText,
    roles: ["patient"],
  },
  {
    name: "Reports",
    href: "/dashboard/patient/reports",
    icon: FileDown,
    roles: ["patient"],
  },
  {
    name: "AI Chat",
    href: "/dashboard/patient/chat",
    icon: Bot,
    roles: ["patient"],
  },
  // Doctor navigation
  {
    name: "Today's Appointments",
    href: "/dashboard/doctor",
    icon: Calendar,
    roles: ["doctor"],
  },
  {
    name: "Patient Queue",
    href: "/dashboard/doctor/queue",
    icon: ClipboardList,
    roles: ["doctor"],
  },
  {
    name: "Medical Summaries",
    href: "/dashboard/doctor/summaries",
    icon: FileText,
    roles: ["doctor"],
  },
  {
    name: "Follow-Up Alerts",
    href: "/dashboard/doctor/alerts",
    icon: AlertCircle,
    roles: ["doctor"],
  },
  {
    name: "Profile",
    href: "/dashboard/doctor/profile",
    icon: User,
    roles: ["doctor"],
  },
  // Admin navigation
  {
    name: "Analytics",
    href: "/dashboard/admin",
    icon: BarChart3,
    roles: ["admin"],
  },
  {
    name: "Appointments",
    href: "/dashboard/admin/appointments",
    icon: Calendar,
    roles: ["admin"],
  },
  {
    name: "Doctors",
    href: "/dashboard/admin/doctors",
    icon: UserCheck,
    roles: ["admin"],
  },
  {
    name: "Patients",
    href: "/dashboard/admin/patients",
    icon: Users,
    roles: ["admin"],
  },
  {
    name: "Conversations",
    href: "/dashboard/admin/conversations",
    icon: MessageSquare,
    roles: ["admin"],
  },
  {
    name: "Settings",
    href: "/dashboard/admin/settings",
    icon: Settings,
    roles: ["admin"],
  },
]

/**
 * Sidebar navigation component
 * Conditionally displays navigation items based on user role
 */
export function Sidebar() {
  const pathname = usePathname()
  const [role, setRole] = useState<UserRole>("admin")

  useEffect(() => {
    // Get role from localStorage on client side
    const updateRole = () => {
      setRole(getUserRole())
    }
    
    updateRole()
    
    // Listen for storage changes (when role is updated in another tab/window)
    window.addEventListener("storage", updateRole)
    
    // Also listen for custom storage event (for same-tab updates)
    const handleStorageChange = () => {
      updateRole()
    }
    window.addEventListener("roleChanged", handleStorageChange)
    
    return () => {
      window.removeEventListener("storage", updateRole)
      window.removeEventListener("roleChanged", handleStorageChange)
    }
  }, [])

  // Filter navigation items based on current role
  const navigation = allNavigationItems.filter((item) =>
    item.roles.includes(role)
  )

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card">
      {/* Logo/Brand */}
      <div className="flex h-16 items-center border-b px-6">
        <h1 className="text-xl font-bold text-primary">MedAssist</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
