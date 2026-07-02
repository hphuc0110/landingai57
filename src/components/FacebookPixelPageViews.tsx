import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function FacebookPixelPageViews() {
  const { pathname } = useLocation()
  const isFirst = useRef(true)

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false
      return
    }

    window.fbq?.('track', 'PageView')
  }, [pathname])

  return null
}
