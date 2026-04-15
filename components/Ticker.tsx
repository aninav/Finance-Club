'use client'
import { useEffect, useState } from 'react'

const SYMBOLS = ['SPY', 'QQQ', 'AAPL', 'NVDA', 'TSLA', 'BTC/USD', 'MSFT', 'AMZN']

type Quote = {
  symbol: string
  price: string
  change: string
  percent_change: string
}

const FALLBACK: Quote[] = [
  { symbol: 'SPY',     price: '592.14', change: '+4.84',  percent_change: '+0.82%' },
  { symbol: 'QQQ',     price: '498.37', change: '+5.63',  percent_change: '+1.14%' },
  { symbol: 'AAPL',    price: '214.29', change: '-0.88',  percent_change: '-0.41%' },
  { symbol: 'NVDA',    price: '121.44', change: '+0.70',  percent_change: '+0.58%' },
  { symbol: 'TSLA',    price: '179.82', change: '-3.79',  percent_change: '-2.07%' },
  { symbol: 'BTC/USD', price: '83420',  change: '+2620',  percent_change: '+3.22%' },
  { symbol: 'MSFT',    price: '415.90', change: '+2.10',  percent_change: '+0.51%' },
  { symbol: 'AMZN',    price: '196.44', change: '-1.20',  percent_change: '-0.61%' },
]

async function fetchQuotes(): Promise<Quote[] | null> {
  const key = process.env.NEXT_PUBLIC_TWELVE_DATA_KEY
  if (!key) return null

  try {
    // Use /quote which returns close, change, percent_change
    // Fetch each symbol individually to avoid batch parse issues on free plan
    const results = await Promise.all(
      SYMBOLS.map(async (symbol) => {
        const res = await fetch(
          `https://api.twelvedata.com/quote?symbol=${encodeURIComponent(symbol)}&apikey=${key}`,
          { cache: 'no-store' }
        )
        const data = await res.json()

        // If API returns an error object (e.g. rate limit), fall back
        if (data.status === 'error' || !data.close) return null

        const price = parseFloat(data.close)
        const change = parseFloat(data.change)
        const pct = parseFloat(data.percent_change)

        if (isNaN(price) || price === 0) return null

        return {
          symbol,
          price: price.toFixed(2),
          change: (change >= 0 ? '+' : '') + change.toFixed(2),
          percent_change: (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%',
        } as Quote
      })
    )

    // If more than half failed, return null to keep fallback
    const valid = results.filter(Boolean) as Quote[]
    if (valid.length < SYMBOLS.length / 2) return null

    // Fill any nulls with fallback values
    return SYMBOLS.map((sym, i) => results[i] ?? FALLBACK[i])
  } catch {
    return null
  }
}

export default function Ticker() {
  const [quotes, setQuotes] = useState<Quote[]>(FALLBACK)

  useEffect(() => {
    // Fetch immediately on mount
    fetchQuotes().then((data) => {
      if (data) setQuotes(data)
    })

    // Then refresh every 60s
    const id = setInterval(() => {
      fetchQuotes().then((data) => {
        if (data) setQuotes(data)
      })
    }, 60_000)

    return () => clearInterval(id)
  }, [])

  const doubled = [...quotes, ...quotes]

  return (
    <div className="bg-forest-800 border-y border-emerald-mid/10 py-2.5 overflow-hidden">
      <div className="flex gap-12 animate-ticker whitespace-nowrap w-max">
        {doubled.map((q, i) => {
          const up = !q.percent_change.startsWith('-')
          return (
            <span key={i} className="inline-flex items-center gap-2 text-[12px]">
              <span className="font-medium text-emerald-light">{q.symbol}</span>
              <span className="text-emerald-light/45">${parseFloat(q.price).toLocaleString()}</span>
              <span className={up ? 'text-emerald-DEFAULT' : 'text-red-400'}>
                {q.percent_change}
              </span>
            </span>
          )
        })}
      </div>
    </div>
  )
}
