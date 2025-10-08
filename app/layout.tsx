import type { Metadata } from 'next'
import './globals.css'
import { LanguageProvider } from '../lib/language-context'

export const metadata: Metadata = {
  title: 'Imam Muhtadi - Fullstack Developer',
  description: 'Imam Muhtadi - Fullstack Developer based in Bali, Indonesia',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
