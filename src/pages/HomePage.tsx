import Card from '../components/Card'
import catPic from '../assets/download.jpeg'

/** Shows the existing demonstration cards on the home page. */
function HomePage() {
  return (
    <section id="center" aria-label="Демонстрационные карточки">
      <Card title="Заголовок 1" link="https://google.com" image={catPic} imageAlt="Котёнок">
        <p>Some lorem ipsum paragraphs</p>
        <p>Second line</p>
      </Card>
      <Card title="Заголовок 2">
        <p>Another lorem ipsum wordacadabra</p>
      </Card>
    </section>
  )
}

export default HomePage
