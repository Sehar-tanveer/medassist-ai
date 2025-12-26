# MedAssist Admin Dashboard

A production-ready Next.js 14 admin dashboard starter for an AI hospital receptionist system.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**

## Features

- 🏥 Dashboard with stat cards
- 📅 Appointments management page
- 👨‍⚕️ Doctors directory
- 💬 Conversations interface (WhatsApp-style)
- 📱 Fully responsive design
- 🎨 Clean, modern UI with ShadCN components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── lib/             # Utility functions
└── styles/          # Global styles
```

## Pages

- `/` - Dashboard home with statistics
- `/appointments` - Appointments table
- `/doctors` - Doctors list
- `/conversations` - Chat interface
- `/settings` - Settings page (placeholder)

## Notes

- This is a frontend-only starter with mock data
- Authentication UI structure is ready but no auth logic is implemented
- All data is static/mocked for demonstration purposes
