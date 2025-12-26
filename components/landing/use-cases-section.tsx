import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Stethoscope, Microscope, Video, Heart } from "lucide-react"

/**
 * Use cases section component
 * Shows ideal use cases for MedAssist AI
 */
export function UseCasesSection() {
  const useCases = [
    {
      icon: Building2,
      title: "Hospitals",
      description:
        "Large-scale healthcare facilities managing thousands of patients daily. Perfect for emergency departments, outpatient clinics, and specialized units.",
    },
    {
      icon: Stethoscope,
      title: "Clinics",
      description:
        "Private and public clinics of all sizes. Handles appointment scheduling, patient inquiries, and follow-ups efficiently.",
    },
    {
      icon: Microscope,
      title: "Diagnostic & Imaging Centers",
      description:
        "Laboratories and imaging facilities. Manages test bookings, result queries, and pre-visit instructions automatically.",
    },
    {
      icon: Video,
      title: "Telemedicine Platforms",
      description:
        "Virtual healthcare providers. Integrates seamlessly with telemedicine workflows and remote consultation scheduling.",
    },
    {
      icon: Heart,
      title: "Home Care & Nursing Services",
      description:
        "Home healthcare providers. Schedules visits, manages follow-ups, and coordinates care between patients and caregivers.",
    },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-muted/20 overflow-hidden">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium mb-4">
            <span>Perfect Fit For</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Ideal For
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            MedAssist AI works seamlessly across all healthcare settings
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <Card
                key={useCase.title}
                className="group relative overflow-hidden border-2 border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {useCase.description}
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
