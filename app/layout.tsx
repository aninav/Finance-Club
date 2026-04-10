import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'CHS Finance Club',
  description: 'Master the language of money — Colleyville Heritage High School Finance Club',
  openGraph: {
    title: 'CHS Finance Club',
    description: 'Master the language of money — Colleyville Heritage High School',
    url: 'https://chsfinance.vercel.app',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <Ticker />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
