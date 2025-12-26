import { LandingNavbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { RoleCards } from "@/components/landing/role-cards"
import { FeaturesSection } from "@/components/landing/features-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { StatsSection } from "@/components/landing/stats-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { Footer } from "@/components/landing/footer"

/**
 * Landing page
 * Public-facing homepage with comprehensive information about MedAssist AI
 */
export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <RoleCards />
        <FeaturesSection />
        <BenefitsSection />
        <UseCasesSection />
      </main>
      <Footer />
    </div>
  )
}
