import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Stethoscope, Shield, ArrowRight } from "lucide-react"

/**
 * Role selection cards component
 * Displays three cards for Patient, Doctor, and Admin roles
 */
export function RoleCards() {
  const roles = [
    {
      name: "Patient",
      title: "For Patients",
      description: "Book appointments, chat with AI assistant, view prescriptions and medical reports",
      icon: User,
      href: "/login?role=patient",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950",
    },
    {
      name: "Doctor",
      title: "For Healthcare Providers",
      description: "Manage appointments, patient queue, medical summaries, and follow-up alerts",
      icon: Stethoscope,
      href: "/login?role=doctor",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950",
    },
    {
      name: "Admin",
      title: "For Administrators",
      description: "System analytics, user management, appointment oversight, and settings",
      icon: Shield,
      href: "/login?role=admin",
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-background">
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium mb-4">
            <span>Role-Based Access</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Choose Your Portal
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Access your personalized dashboard based on your role
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <Card
                key={role.name}
                className="group relative overflow-hidden border-2 border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >

                <CardHeader className="relative z-10">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className={`h-8 w-8 ${role.color}`} />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {role.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  >
                    <Link href={role.href} className="flex items-center justify-center">
                      {role.name} Portal
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
