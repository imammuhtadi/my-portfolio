import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Imam Muhtadi - Flutter Developer',
  description: 'Imam Muhtadi - Flutter Developer base on Bali, Indoneisa',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
