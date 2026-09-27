import CurrencyItem from './CurrencyItem'

const currencies = [
  { name: 'USD', value: '— 00,00', change: '+0,00' },
  { name: 'EUR', value: '— 00,00', change: '+0,00' },
  { name: 'Нефть', value: '00,00', change: '+0,00%' },
]

/** Lists static currency and market values. */
export default function CurrencyTicker() {
  return (
    <ul className="currency-ticker" aria-label="Курсы и котировки">
      {currencies.map(currency => (
        <CurrencyItem key={currency.name} {...currency} />
      ))}
    </ul>
  )
}
