/**
 * Mock data for the MedAssist dashboard
 * All data is static and used for demonstration purposes
 */

export interface Appointment {
  id: string
  patientName: string
  doctor: string
  time: string
  date: string
  status: "scheduled" | "completed" | "cancelled" | "in-progress"
}

export interface Doctor {
  id: string
  name: string
  specialty: string
  availability: "available" | "busy" | "offline"
  avatar?: string
}

export interface Conversation {
  id: string
  patientName: string
  lastMessage: string
  timestamp: string
  unreadCount: number
  avatar?: string
}

export interface Message {
  id: string
  text: string
  sender: "patient" | "assistant"
  timestamp: string
}

// Mock appointments data
export const mockAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "John Doe",
    doctor: "Dr. Sarah Johnson",
    time: "09:00 AM",
    date: "2024-03-15",
    status: "scheduled",
  },
  {
    id: "2",
    patientName: "Jane Smith",
    doctor: "Dr. Michael Chen",
    time: "10:30 AM",
    date: "2024-03-15",
    status: "in-progress",
  },
  {
    id: "3",
    patientName: "Robert Williams",
    doctor: "Dr. Emily Davis",
    time: "11:00 AM",
    date: "2024-03-15",
    status: "scheduled",
  },
  {
    id: "4",
    patientName: "Maria Garcia",
    doctor: "Dr. Sarah Johnson",
    time: "02:00 PM",
    date: "2024-03-15",
    status: "completed",
  },
  {
    id: "5",
    patientName: "David Brown",
    doctor: "Dr. Michael Chen",
    time: "03:30 PM",
    date: "2024-03-15",
    status: "scheduled",
  },
  {
    id: "6",
    patientName: "Lisa Anderson",
    doctor: "Dr. Emily Davis",
    time: "04:00 PM",
    date: "2024-03-15",
    status: "cancelled",
  },
]

// Mock doctors data
export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    availability: "available",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Pediatrics",
    availability: "busy",
  },
  {
    id: "3",
    name: "Dr. Emily Davis",
    specialty: "Dermatology",
    availability: "available",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Orthopedics",
    availability: "offline",
  },
  {
    id: "5",
    name: "Dr. Olivia Martinez",
    specialty: "Neurology",
    availability: "available",
  },
  {
    id: "6",
    name: "Dr. William Taylor",
    specialty: "General Medicine",
    availability: "busy",
  },
]

// Mock conversations data
export const mockConversations: Conversation[] = [
  {
    id: "1",
    patientName: "John Doe",
    lastMessage: "Thank you for the appointment confirmation",
    timestamp: "2 min ago",
    unreadCount: 0,
  },
  {
    id: "2",
    patientName: "Jane Smith",
    lastMessage: "I need to reschedule my appointment",
    timestamp: "15 min ago",
    unreadCount: 2,
  },
  {
    id: "3",
    patientName: "Robert Williams",
    lastMessage: "What are your available slots?",
    timestamp: "1 hour ago",
    unreadCount: 1,
  },
  {
    id: "4",
    patientName: "Maria Garcia",
    lastMessage: "I'll be there at 2 PM",
    timestamp: "2 hours ago",
    unreadCount: 0,
  },
  {
    id: "5",
    patientName: "David Brown",
    lastMessage: "Is Dr. Chen available today?",
    timestamp: "3 hours ago",
    unreadCount: 0,
  },
]

// Mock messages for a conversation
export const mockMessages: Message[] = [
  {
    id: "1",
    text: "Hello, I'd like to book an appointment",
    sender: "patient",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    text: "Hello! I'd be happy to help you book an appointment. What date works best for you?",
    sender: "assistant",
    timestamp: "10:31 AM",
  },
  {
    id: "3",
    text: "How about tomorrow afternoon?",
    sender: "patient",
    timestamp: "10:32 AM",
  },
  {
    id: "4",
    text: "Let me check availability... Yes, we have slots available tomorrow at 2 PM and 3 PM. Which would you prefer?",
    sender: "assistant",
    timestamp: "10:33 AM",
  },
  {
    id: "5",
    text: "2 PM works great for me",
    sender: "patient",
    timestamp: "10:34 AM",
  },
  {
    id: "6",
    text: "Perfect! I've booked your appointment for tomorrow at 2 PM with Dr. Sarah Johnson. You'll receive a confirmation email shortly.",
    sender: "assistant",
    timestamp: "10:35 AM",
  },
]

// Dashboard statistics
export const dashboardStats = {
  totalAppointments: 24,
  activeConversations: 8,
  doctorsAvailable: 3,
  todaysBookings: 6,
}

// Patient-specific mock data
export interface Prescription {
  id: string
  medication: string
  dosage: string
  frequency: string
  doctor: string
  date: string
  status: "active" | "completed"
}

export interface Report {
  id: string
  title: string
  type: "lab" | "imaging" | "pathology"
  date: string
  doctor: string
  status: "available" | "pending"
}

export const mockPrescriptions: Prescription[] = [
  {
    id: "1",
    medication: "Amoxicillin",
    dosage: "500mg",
    frequency: "Twice daily",
    doctor: "Dr. Sarah Johnson",
    date: "2024-03-10",
    status: "active",
  },
  {
    id: "2",
    medication: "Ibuprofen",
    dosage: "400mg",
    frequency: "As needed",
    doctor: "Dr. Michael Chen",
    date: "2024-03-05",
    status: "active",
  },
  {
    id: "3",
    medication: "Vitamin D",
    dosage: "1000 IU",
    frequency: "Once daily",
    doctor: "Dr. Emily Davis",
    date: "2024-02-28",
    status: "completed",
  },
]

export const mockReports: Report[] = [
  {
    id: "1",
    title: "Blood Test Results",
    type: "lab",
    date: "2024-03-12",
    doctor: "Dr. Sarah Johnson",
    status: "available",
  },
  {
    id: "2",
    title: "X-Ray - Chest",
    type: "imaging",
    date: "2024-03-08",
    doctor: "Dr. Michael Chen",
    status: "available",
  },
  {
    id: "3",
    title: "Complete Blood Count",
    type: "lab",
    date: "2024-03-14",
    doctor: "Dr. Emily Davis",
    status: "pending",
  },
]

// Doctor-specific mock data
export interface MedicalSummary {
  id: string
  patientName: string
  summary: string
  date: string
  appointmentId: string
}

export interface FollowUpAlert {
  id: string
  patientName: string
  reason: string
  priority: "high" | "medium" | "low"
  dueDate: string
}

export const mockMedicalSummaries: MedicalSummary[] = [
  {
    id: "1",
    patientName: "John Doe",
    summary: "Patient presented with chest pain. ECG normal. Prescribed rest and follow-up in 2 weeks.",
    date: "2024-03-15",
    appointmentId: "1",
  },
  {
    id: "2",
    patientName: "Jane Smith",
    summary: "Routine checkup. Blood pressure stable. Recommended lifestyle modifications.",
    date: "2024-03-14",
    appointmentId: "2",
  },
]

export const mockFollowUpAlerts: FollowUpAlert[] = [
  {
    id: "1",
    patientName: "John Doe",
    reason: "Post-surgery follow-up required",
    priority: "high",
    dueDate: "2024-03-20",
  },
  {
    id: "2",
    patientName: "Maria Garcia",
    reason: "Lab results review",
    priority: "medium",
    dueDate: "2024-03-18",
  },
  {
    id: "3",
    patientName: "David Brown",
    reason: "Medication adjustment needed",
    priority: "low",
    dueDate: "2024-03-25",
  },
]

// Admin-specific mock data
export interface AnalyticsData {
  totalPatients: number
  totalDoctors: number
  totalAppointments: number
  revenue: number
  growthRate: number
}

export const mockAnalytics: AnalyticsData = {
  totalPatients: 1247,
  totalDoctors: 24,
  totalAppointments: 342,
  revenue: 125000,
  growthRate: 12.5,
}
