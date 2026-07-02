import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

interface RegistrationModalContextValue {
  isOpen: boolean
  openRegistration: () => void
  closeRegistration: () => void
}

const RegistrationModalContext = createContext<RegistrationModalContextValue | null>(null)

export function RegistrationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openRegistration = useCallback(() => setIsOpen(true), [])
  const closeRegistration = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeRegistration()
    }

    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeRegistration])

  return (
    <RegistrationModalContext.Provider
      value={{ isOpen, openRegistration, closeRegistration }}
    >
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
