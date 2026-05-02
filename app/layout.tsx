import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Customer Support Tagger — Auto-tag tickets by urgency and type',
  description: 'AI automatically categorizes and prioritizes customer support tickets from email, Slack, and chat.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="dec3c252-6b94-4cf7-af39-909c2ac88ceb"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
