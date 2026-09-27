import type { ReactNode } from 'react'
import SearchBar from './SearchBar'

type SearchSectionProps = {
  logo: ReactNode
}

const categories = ['Видео', 'Картинки', 'Новости', 'Карты', 'Маркет', 'Переводчик', 'Эфир', 'Ещё']

/** Combines the brand mark, search categories, field, and helper text. */
export default function SearchSection({ logo }: SearchSectionProps) {
  return (
    <section className="search-section" aria-label="Поиск">
      {logo}
      <div className="search-content">
        <nav className="search-categories" aria-label="Разделы">
          {categories.map(category => (
            <span key={category}>{category}</span>
          ))}
        </nav>
        <SearchBar />
        <p className="search-hint">Найдётся всё. Например, интересная тема</p>
      </div>
    </section>
  )
}
