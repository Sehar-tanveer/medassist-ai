"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { getUserRole, getDashboardPath } from "@/lib/role-utils"

/**
 * Dashboard redirect page
 * Redirects users to their role-based dashboard
 */
export default function DashboardRedirectPage() {
  const router = useRouter()

  useEffect(() => {
    const role = getUserRole()
    router.replace(getDashboardPath(role))
  }, [router])

  return (
    <div className="flex h-screen items-center justify-center">
      <p className="text-muted-foreground">Redirecting to your dashboard...</p>
    </div>
  )
}
