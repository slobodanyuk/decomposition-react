import NewsItem from './NewsItem'
import CurrencyTicker from './CurrencyTicker'

const categories = ['Сейчас в СМИ', 'В регионе', 'Рекомендуем']

const news = [
  { icon: '◉', text: 'Короткая новость дня', href: '#' },
  { icon: '◉', text: 'Обзор важных событий', href: '#' },
  { icon: '▣', text: 'Новости и комментарии', href: '#' },
  { icon: '◉', text: 'События в стране', href: '#' },
  { icon: '▰', text: 'Последние обновления', href: '#' },
]

/** Combines news categories, linked headlines, and the currency ticker. */
export default function NewsSection() {
  return (
    <section className="news-section" aria-label="Новости">
      <nav className="news-categories" aria-label="Категории новостей">
        {categories.map(category => (
          <span key={category}>{category}</span>
        ))}
        <time dateTime="2026-09-27">27 сентября</time>
      </nav>

      <ul className="news-list">
        {news.map(item => (
          <NewsItem key={item.text} {...item} />
        ))}
      </ul>

      <CurrencyTicker />
    </section>
  )
}
