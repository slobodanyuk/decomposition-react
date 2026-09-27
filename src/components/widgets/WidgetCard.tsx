import type { ReactNode } from 'react'

type WidgetCardProps = {
  title: string
  children: ReactNode
}

/** Provides a shared titled container for dashboard widgets. */
export default function WidgetCard({ title, children }: WidgetCardProps) {
  return (
    <section className="widget-card">
      <h2>{title}</h2>
      {children}
    </section>
  )
}
