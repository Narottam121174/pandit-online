import type { GodImage } from '@/lib/content'

export default function Plate({
  image,
  alt,
  caption,
  priority = false,
  className = '',
}: {
  image: GodImage
  alt: string
  caption?: string
  priority?: boolean
  className?: string
}) {
  const shape = image.w > image.h ? 'plate--wide' : 'plate--tall'
  return (
    <figure className={`plate ${shape} ${className}`.trim()}>
      <div className="plate-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.src} width={image.w} height={image.h} alt={alt} loading={priority ? 'eager' : 'lazy'} decoding="async" />
      </div>
      {caption && <figcaption lang="hi">{caption}</figcaption>}
    </figure>
  )
}
