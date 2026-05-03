import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Playbook Extractor — Turn Slack Incidents into Reusable Playbooks',
  description: 'Automatically extract successful resolution steps from Slack incident channels and build a searchable playbook knowledge base for your DevOps team.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="61ee0ce7-1312-43d2-b5e3-d6c8939c1ce4"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
