'use client'
import { useEffect, useState } from 'react'

// Symbols to display
const SYMBOLS = ['SPY', 'QQQ', 'AAPL', 'NVDA', 'TSLA', 'BTC/USD', 'MSFT', 'AMZN']

type Quote = {
  symbol: string
  price: string
  change: string
  percent_change: string
}

// Fallback static data shown before API response
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

export default function Ticker() {
  const [quotes, setQuotes] = useState<Quote[]>(FALLBACK)

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const key = process.env.NEXT_PUBLIC_TWELVE_DATA_KEY
        if (!key) return
        const res = await fetch(
          `https://api.twelvedata.com/quote?symbol=${SYMBOLS.join(',')}&apikey=${key}`
        )
        const data = await res.json()
        const parsed: Quote[] = SYMBOLS.map((s) => {
          const q = data[s] ?? data
          return {
            symbol: s,
            price: parseFloat(q.close ?? q.price ?? '0').toFixed(2),
            change: q.change ?? '0',
            percent_change: q.percent_change ?? '0%',
          }
        })
        setQuotes(parsed)
      } catch {
        // keep fallback
      }
    }
    fetchQuotes()
    const id = setInterval(fetchQuotes, 60_000)
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
