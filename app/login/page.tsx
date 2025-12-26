"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { setUserRole, getDashboardPath, type UserRole } from "@/lib/role-utils"
import { User, Stethoscope, Shield, ArrowRight, LogIn } from "lucide-react"

/**
 * Login page content component
 */
function LoginPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Get role from URL query parameter
  useEffect(() => {
    const roleParam = searchParams.get("role")
    if (roleParam && ["patient", "doctor", "admin"].includes(roleParam)) {
      setSelectedRole(roleParam as UserRole)
    }
  }, [searchParams])

  const handleLogin = () => {
    if (!selectedRole) return

    setIsLoading(true)
    
    // Set role in localStorage
    setUserRole(selectedRole)
    
    // Small delay for better UX
    setTimeout(() => {
      // Redirect to appropriate dashboard
      router.push(getDashboardPath(selectedRole))
    }, 300)
  }

  const roles = [
    {
      value: "patient" as UserRole,
      label: "Patient",
      icon: User,
      description: "Access your appointments, prescriptions, and medical records",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
    {
      value: "doctor" as UserRole,
      label: "Doctor",
      icon: Stethoscope,
      description: "Manage appointments, patient queue, and medical summaries",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950",
    },
    {
      value: "admin" as UserRole,
      label: "Admin",
      icon: Shield,
      description: "System analytics, user management, and settings",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/20 p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl font-bold text-primary">MedAssist</span>
            <span className="text-sm text-muted-foreground">AI</span>
          </Link>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome Back
          </h1>
          <p className="mt-2 text-muted-foreground">
            Select your role to access your dashboard
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {roles.map((role) => {
            const Icon = role.icon
            const isSelected = selectedRole === role.value

            return (
              <Card
                key={role.value}
                onClick={() => setSelectedRole(role.value)}
                className={`cursor-pointer transition-all border-2 ${
                  isSelected
                    ? "border-primary bg-primary/5 shadow-lg"
                    : "border-border hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <CardHeader>
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${
                      isSelected ? "bg-primary/20" : role.bgColor
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 ${
                        isSelected ? "text-primary" : role.color
                      }`}
                    />
                  </div>
                  <CardTitle className="text-lg">{role.label}</CardTitle>
                  <CardDescription className="text-sm">
                    {role.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Login Button */}
        <Card className="border-2">
          <CardContent className="pt-6">
            <Button
              onClick={handleLogin}
              disabled={!selectedRole || isLoading}
              size="lg"
              className="w-full group"
            >
              {isLoading ? (
                "Redirecting..."
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Access Dashboard
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </Button>
            {!selectedRole && (
              <p className="mt-3 text-center text-sm text-muted-foreground">
                Please select a role to continue
              </p>
            )}
          </CardContent>
        </Card>

        {/* Back to Landing */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

/**
 * Login page
 * Allows users to select their role and access the appropriate dashboard
 */
export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    }>
      <LoginPageContent />
    </Suspense>
  )
}
