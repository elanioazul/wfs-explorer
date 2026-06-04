"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type TranslationKey, enTranslations, spTranslations } from "@/lib/translations"

type Language = "en" | "sp"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 1. Always initialize to a static default to match the server output
  const [language, setLanguage] = useState<Language>("en")

  // 2. Safely perform client-only detection after the page has successfully hydrated
  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith("es")) {
      setLanguage("sp")
    }
  }, [])

  const t = (key: TranslationKey): string => {
    const translations = language === "en" ? enTranslations : spTranslations
    return translations[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}