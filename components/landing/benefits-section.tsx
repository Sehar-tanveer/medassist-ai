import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Users, TrendingUp, Shield, Globe } from "lucide-react"

/**
 * Benefits section component
 * Highlights key benefits of MedAssist AI
 */
export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Receptionist",
      description: "Never miss a patient call or inquiry, even outside business hours",
    },
    {
      icon: Users,
      title: "Eliminates Long Waiting Calls",
      description: "Patients get instant responses without waiting on hold",
    },
    {
      icon: CheckCircle2,
      title: "Zero Human Error in Scheduling",
      description: "AI ensures accurate appointment bookings and reduces mistakes",
    },
    {
      icon: TrendingUp,
      title: "Reduces Staff Workload by 70%",
      description: "Automate repetitive tasks and free up staff for critical work",
    },
    {
      icon: Users,
      title: "Increases Patient Satisfaction",
      description: "Faster responses, better routing, and personalized care",
    },
    {
      icon: Globe,
      title: "Fully Scalable",
      description: "Works for small clinics to large hospitals with ease",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-background">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium mb-4">
            <span>Why Choose MedAssist</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Key Benefits
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform your healthcare facility with intelligent automation
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card
                key={benefit.title}
                className="group relative overflow-hidden border-2 border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
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
