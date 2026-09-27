import AdBanner from '../components/AdBanner'
import BrandLogo from '../components/search/BrandLogo'
import NewsSection from '../components/news/NewsSection'
import PromoWidget from '../components/PromoWidget'
import SearchSection from '../components/search/SearchSection'
import WidgetCard from '../components/widgets/WidgetCard'
import WidgetListItem from '../components/widgets/WidgetListItem'
import './DecompositionPage.css'

const visitedLinks = [
  { title: 'Тема 1', description: 'Короткое описание', href: '#' },
  { title: 'Тема 2', description: 'Ещё одна ссылка', href: '#' },
  { title: 'Тема 3', description: 'Полезная информация', href: '#' },
]

const programs = [
  { time: '02:00', title: 'Передача 1', channel: 'Канал 1' },
  { time: '02:15', title: 'Передача 2', channel: 'Канал 2' },
  { time: '02:25', title: 'Передача 3', channel: 'Канал 3' },
]

const broadcasts = [
  { icon: '▶', title: 'Программа 1', source: 'Канал 1' },
  { icon: '▶', title: 'Программа 2', source: 'Канал 2' },
  { icon: '▶', title: 'Программа 3', source: 'Канал 3' },
]

/** Composes the static dashboard example from reusable interface blocks. */
function DecompositionPage() {
  return (
    <section className="decomposition-page" aria-label="Пример главной страницы">
      <h1 className="visually-hidden">Decomposition</h1>
      <div className="top-grid">
        <NewsSection />
        <PromoWidget />
      </div>
      <SearchSection logo={<BrandLogo />} />
      <AdBanner />
      <section className="dashboard-grid" aria-label="Информационные блоки">
        <div className="widget-column">
          <WidgetCard title="Погода">
            <div className="weather-summary">
              <span className="weather-icon" aria-hidden="true">
                ☁️
              </span>
              <strong>+17°</strong>
              <span>Утром +17°, днём +20°</span>
            </div>
          </WidgetCard>

          <WidgetCard title="Посещаемое">
            <ul className="widget-list">
              {visitedLinks.map(link => (
                <WidgetListItem
                  key={link.title}
                  title={link.title}
                  detail={link.description}
                  href={link.href}
                />
              ))}
            </ul>
          </WidgetCard>
        </div>

        <div className="widget-column">
          <WidgetCard title="Карта Германии">
            <p className="widget-placeholder">Карта и расписания</p>
          </WidgetCard>

          <WidgetCard title="Телепрограмма">
            <ul className="widget-list">
              {programs.map(program => (
                <WidgetListItem
                  key={program.time}
                  leading={<time>{program.time}</time>}
                  title={program.title}
                  detail={program.channel}
                />
              ))}
            </ul>
          </WidgetCard>
        </div>

        <div className="widget-column">
          <WidgetCard title="Эфир">
            <ul className="widget-list">
              {broadcasts.map(broadcast => (
                <WidgetListItem
                  key={broadcast.title}
                  leading={<span aria-hidden="true">{broadcast.icon}</span>}
                  title={broadcast.title}
                  detail={broadcast.source}
                />
              ))}
            </ul>
          </WidgetCard>
        </div>
      </section>
    </section>
  )
}

export default DecompositionPage
