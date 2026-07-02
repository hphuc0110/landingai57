import type { LogoKey } from '../data/logos'
import { logos } from '../data/logos'

interface BrandLogoProps {
  brand: LogoKey
  alt: string
  className?: string
}

export default function BrandLogo({ brand, alt, className = 'h-9 w-auto object-contain' }: BrandLogoProps) {
  return <img src={logos[brand]} alt={alt} className={className} />
}
