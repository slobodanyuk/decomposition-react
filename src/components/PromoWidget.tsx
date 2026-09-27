/** Shows a compact promotional message beside the news section. */
export default function PromoWidget() {
  return (
    <aside className="promo-widget">
      <div className="promo-icon" aria-hidden="true">
        ✎
      </div>
      <h2>Полезные советы</h2>
      <p>Короткая рекомендация для читателей</p>
    </aside>
  )
}
