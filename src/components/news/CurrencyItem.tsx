type CurrencyItemProps = {
  name: string
  value: string
  change: string
}

/** Displays one currency value and its change. */
export default function CurrencyItem({ name, value, change }: CurrencyItemProps) {
  return (
    <li className="currency-item">
      <strong>{name}</strong> {value} <span>{change}</span>
    </li>
  )
}
