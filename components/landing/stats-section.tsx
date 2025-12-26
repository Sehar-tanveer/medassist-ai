import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, Clock, Users, CheckCircle2 } from "lucide-react"

/**
 * Stats section component
 * Displays key impact metrics
 */
export function StatsSection() {
  const stats = [
    {
      icon: TrendingDown,
      value: "70%",
      label: "Workload Reduction",
      description: "Automates majority of receptionist tasks",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Availability",
      description: "Round-the-clock patient support",
    },
    {
      icon: Users,
      value: "100%",
      label: "Multi-Language",
      description: "English, Urdu, Arabic support",
    },
    {
      icon: CheckCircle2,
      value: "Zero",
      label: "Scheduling Errors",
      description: "Eliminates human error in bookings",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-background">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium mb-4">
            <span>Measurable Impact</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Impact & Results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Measurable improvements for your healthcare facility
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={stat.label}
                className="group relative overflow-hidden border-2 border-border bg-card text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-5xl font-black text-primary mb-2">
                    {stat.value}
                  </CardTitle>
                  <CardTitle className="text-lg font-semibold">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
