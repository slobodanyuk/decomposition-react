import type { ReactNode } from 'react'

type WidgetListItemProps = {
  title: string
  leading?: ReactNode
  detail?: ReactNode
  href?: string
}

/** Displays a configurable row in a dashboard widget list. */
export default function WidgetListItem({ title, leading, detail, href }: WidgetListItemProps) {
  return (
    <li className="widget-list-item">
      {leading && <span className="widget-list-leading">{leading}</span>}
      {href ? <a href={href}>{title}</a> : <span>{title}</span>}
      {detail && <span className="widget-list-detail">{detail}</span>}
    </li>
  )
}
