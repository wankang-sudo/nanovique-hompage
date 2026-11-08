'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Language = 'ko' | 'en'

const STORAGE_KEY = 'nanovique-language'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (ko: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko')

  // Restore after mount so server and client markup match on first render.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY)
      if (saved === 'ko' || saved === 'en') {
        setLanguageState(saved)
      }
    } catch {
      // Storage unavailable (e.g. private mode); keep the default.
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore storage failures; the in-memory state still updates.
    }
  }

  const t = (ko: string, en: string) => {
    return language === 'ko' ? ko : en
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
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
