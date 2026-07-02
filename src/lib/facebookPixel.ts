export const FB_PIXEL_ID = '3444396412407082'

let leadTracked = false

export function trackFacebookLead() {
  if (leadTracked || typeof window === 'undefined') return
  leadTracked = true
  window.fbq?.('track', 'Lead')
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
  }
}
