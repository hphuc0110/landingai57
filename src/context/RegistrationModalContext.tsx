import {
  createContext,
  useCallback,
  useContext,
  type ReactNode,
} from 'react'

const REGISTER_SECTION_ID = 'dang-ky'

interface RegistrationModalContextValue {
  openRegistration: () => void
}

const RegistrationModalContext = createContext<RegistrationModalContextValue | null>(null)

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const openRegistration = useCallback(() => {
    const section = document.getElementById(REGISTER_SECTION_ID)
    if (!section) return

    section.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const firstField = section.querySelector<HTMLElement>('input, textarea, select')
    window.setTimeout(() => firstField?.focus({ preventScroll: true }), 450)
  }, [])

  return (
    <RegistrationModalContext.Provider value={{ openRegistration }}>
      {children}
    </RegistrationModalContext.Provider>
  )
}

export function useRegistrationModal() {
  const context = useContext(RegistrationModalContext)
  if (!context) {
    throw new Error('useRegistrationModal must be used within RegistrationModalProvider')
  }
  return context
}
