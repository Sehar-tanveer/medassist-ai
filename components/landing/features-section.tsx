import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Phone,
  MessageSquare,
  Stethoscope,
  Users,
  FileText,
  Clock,
  FileCheck,
  History,
  TrendingUp,
  CreditCard,
  Globe,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

/**
 * Features section component
 * Showcases all 10 core features of MedAssist AI
 */
export function FeaturesSection() {
  const features = [
    {
      icon: Phone,
      title: "Voice + Chat + Call AI Receptionist",
      description:
        "Human-like natural AI voice supporting multiple languages (English/Urdu/Arabic). Handles phone calls, WhatsApp, website chat, and hospital kiosks. Books, reschedules, cancels appointments, shares fees, timings, and directions.",
      highlight: "Multi-Channel Communication",
    },
    {
      icon: Stethoscope,
      title: "Smart AI Triage (Before Booking)",
      description:
        "AI asks medical questions based on symptoms and routes patients to the right doctor. Reduces wrong bookings, improves doctor efficiency, and enhances patient safety.",
      highlight: "Game-Changer Feature",
    },
    {
      icon: Users,
      title: "Doctor Load Management AI",
      description:
        "Analyzes real-time doctor availability, slot load, and actual patient wait time. Automatically recommends the fastest slot and best doctor for each case.",
      highlight: "Intelligent Routing",
    },
    {
      icon: FileText,
      title: "AI Medical Documentation Assistant",
      description:
        "Collects patient history & symptoms during interaction, creates medical summaries, and sends them directly to doctors before appointments. Saves 3-5 minutes per patient.",
      highlight: "Time-Saving",
    },
    {
      icon: CheckCircle2,
      title: "Automated Pre-Visit Instructions",
      description:
        "Sends automatic instructions via WhatsApp/SMS: fasting before tests, water intake, required documents (NIC, old reports, insurance), and medicine stoppage if needed.",
      highlight: "Patient Preparation",
    },
    {
      icon: Clock,
      title: "Follow-Up & After-Visit AI",
      description:
        "After each visit, AI sends messages/calls to check improvement, asks symptom questions, books follow-ups, and alerts staff if symptoms are severe. Increases patient satisfaction and retention.",
      highlight: "Patient Care",
    },
    {
      icon: FileCheck,
      title: "Prescription Refill & Lab Result Queries",
      description:
        "Independently handles medicine refill requests, lab result queries, medicine instructions, and dosage reminders. Can connect to hospital EMR if allowed.",
      highlight: "Self-Service",
    },
    {
      icon: History,
      title: "Medical History Access (EMR Integration)",
      description:
        "If permitted, AI can fetch previous visits, allergies, lab results, past prescriptions, and chronic conditions. Allows personalized assistance.",
      highlight: "Optional Integration",
    },
    {
      icon: TrendingUp,
      title: "AI-Driven Wait-Time Prediction",
      description:
        "For busy clinics: shows live waiting time, predicts 'Your turn in approx X minutes', warns about doctor delays. Reduces crowd frustration and repetitive calls.",
      highlight: "Real-Time Updates",
    },
    {
      icon: CreditCard,
      title: "Billing & Insurance Assistance",
      description:
        "Automatically answers fees, consultation charges, insurance coverage eligibility, and payment modes. Staff no longer need to answer repetitive billing questions.",
      highlight: "Automated Support",
    },
  ]

  return (
    <section id="features" className="relative py-16 md:py-24 bg-muted/20 overflow-hidden">

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium mb-4">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>AI-Powered Capabilities</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Core Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive AI capabilities that automate up to{" "}
            <span className="font-semibold text-primary">70%</span> of receptionist workload
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden border-2 border-border bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="relative">
                        <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <CardTitle className="text-lg leading-tight font-semibold group-hover:text-primary transition-colors">
                          {feature.title}
                        </CardTitle>
                        {feature.highlight && (
                          <span className="mt-2 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground">
                            {feature.highlight}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-3xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
