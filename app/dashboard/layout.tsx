import { DashboardLayout } from "@/components/dashboard/dashboard-layout"

/**
 * Dashboard layout for all role-based dashboard routes
 * Wraps all dashboard pages with the shared layout
 */
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <DashboardLayout>{children}</DashboardLayout>
}
