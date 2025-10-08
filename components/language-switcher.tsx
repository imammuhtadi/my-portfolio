'use client'

import { Languages } from "lucide-react"
import { useLanguage } from "../lib/language-context"

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id')
  }

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 px-3 gap-2"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5" />
      <span className="text-sm font-medium">{language === 'id' ? 'ID' : 'EN'}</span>
    </button>
  )
}
