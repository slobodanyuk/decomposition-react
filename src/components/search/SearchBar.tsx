/** Renders a static search field and button without search behavior. */
export default function SearchBar() {
  return (
    <div className="search-bar">
      <input type="search" aria-label="Поисковый запрос" placeholder="Введите запрос" readOnly />
      <button type="button">Найти</button>
    </div>
  )
}
