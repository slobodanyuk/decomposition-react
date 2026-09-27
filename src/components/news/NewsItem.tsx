type NewsItemProps = {
  icon: string
  text: string
  href: string
}

/** Shows one linked news row with its source icon. */
export default function NewsItem({ icon, text, href }: NewsItemProps) {
  return (
    <li className="news-item">
      <span className="news-item-icon" aria-hidden="true">
        {icon}
      </span>
      <a href={href}>{text}</a>
    </li>
  )
}
