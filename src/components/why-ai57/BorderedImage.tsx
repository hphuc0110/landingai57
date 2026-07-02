interface BorderedImageProps {
  src: string
  alt: string
  className?: string
}

export default function BorderedImage({ src, alt, className = '' }: BorderedImageProps) {
  return (
    <div
      className={`overflow-hidden rounded-[18px] border-[5px] border-primary bg-primary p-1 shadow-lg ${className}`}
    >
      <img src={src} alt={alt} className="aspect-[4/3] w-full rounded-[14px] object-cover" />
    </div>
  )
}
