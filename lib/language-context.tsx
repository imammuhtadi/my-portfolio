'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, translations } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof translations.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Detect user's country based on timezone or locale
const detectDefaultLanguage = (): Language => {
  if (typeof window === 'undefined') return 'id' // Default for SSR
  
  try {
    // Check localStorage first
    const savedLanguage = localStorage.getItem('preferred-language') as Language
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      return savedLanguage
    }
    
    // Detect based on browser locale
    const userLocale = navigator.language.toLowerCase()
    
    // If locale starts with 'id' (Indonesian), use Indonesian
    if (userLocale.startsWith('id')) {
      return 'id'
    }
    
    // Check timezone for Indonesia
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const indonesianTimezones = ['Asia/Jakarta', 'Asia/Makassar', 'Asia/Jayapura', 'Asia/Pontianak']
    
    if (indonesianTimezones.includes(timezone)) {
      return 'id'
    }
    
    // Default to English for other countries
    return 'en'
  } catch (error) {
    // Fallback to Indonesian if detection fails
    return 'id'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Detect and set initial language on client side
    const detectedLanguage = detectDefaultLanguage()
    setLanguageState(detectedLanguage)
    setIsInitialized(true)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang)
    }
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  }

  // Prevent flash of wrong language
  if (!isInitialized) {
    return null
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
