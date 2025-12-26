import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Phone, MessageSquare, Globe, Monitor, Zap } from "lucide-react"

/**
 * Hero section component for landing page
 * Displays main headline, value proposition, and primary CTAs with AI-themed design
 */
export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-20 md:py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge with Animation */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-background/80 backdrop-blur-sm px-6 py-2.5 text-sm font-medium shadow-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-foreground font-medium">
              AI-Powered Virtual Receptionist for Healthcare
            </span>
            <Zap className="h-4 w-4 text-primary" />
          </div>

          {/* Main Headline with Gradient */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-foreground">
              Your 24/7 AI
            </span>
            <span className="block mt-2 text-primary">
              Hospital Receptionist
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Automate up to <span className="font-semibold text-primary">70%</span> of receptionist workload. 
            Handle patient calls, chats, appointments, triage, and follow-ups with{" "}
            <span className="font-semibold text-primary">human-like AI</span> that speaks multiple languages.
          </p>

          {/* Communication Channels with Enhanced Design */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
            {[
              { icon: Phone, label: "Phone Calls" },
              { icon: MessageSquare, label: "WhatsApp" },
              { icon: Globe, label: "Website Chat" },
              { icon: Monitor, label: "Kiosk" },
            ].map((channel, index) => {
              const Icon = channel.icon
              return (
                <div
                  key={channel.label}
                  className="group relative flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-all hover:border-primary/30 hover:shadow-md"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-foreground">{channel.label}</span>
                </div>
              )
            })}
          </div>

          {/* CTA Buttons with Enhanced Design */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/login" className="flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 hover:border-primary/50 transition-all"
            >
              <Link href="#features" className="flex items-center">
                Explore Features
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
