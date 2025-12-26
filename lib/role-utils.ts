/**
 * Role utility functions
 * Manages user role state in localStorage (frontend-only, temporary solution)
 */

export type UserRole = "patient" | "doctor" | "admin"

const ROLE_STORAGE_KEY = "medassist_user_role"

/**
 * Get the current user role from localStorage
 * Defaults to "admin" if no role is set
 */
export function getUserRole(): UserRole {
  if (typeof window === "undefined") {
    return "admin" // Server-side default
  }

  const storedRole = localStorage.getItem(ROLE_STORAGE_KEY)
  if (storedRole && ["patient", "doctor", "admin"].includes(storedRole)) {
    return storedRole as UserRole
  }

  // Default to admin if no role is set
  return "admin"
}

/**
 * Set the user role in localStorage
 */
export function setUserRole(role: UserRole): void {
  if (typeof window === "undefined") {
    return
  }

  localStorage.setItem(ROLE_STORAGE_KEY, role)
}

/**
 * Get the dashboard path for a given role
 */
export function getDashboardPath(role: UserRole): string {
  return `/dashboard/${role}`
}
