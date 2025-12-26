import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * Landing page navbar component
 * Simple navigation for the public landing page
 */
export function LandingNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">MedAssist</span>
            <span className="text-sm text-muted-foreground">AI</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-6 md:flex">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Login
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
