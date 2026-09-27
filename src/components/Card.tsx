import type { ReactNode } from 'react'

type CardProps = {
  title: string
  image?: string
  imageAlt?: string
  link?: string
  children?: ReactNode
}

/** Displays a configurable card with optional image, link, and content. */
export default function Card({ title, image, imageAlt = '', link, children }: CardProps) {
  return (
    <div className="card">
      {image && <img src={image} className="card-img-top" alt={imageAlt} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
        {link && (
          <a href={link} className="btn btn-primary">
            Открыть
          </a>
        )}
      </div>
    </div>
  )
}
