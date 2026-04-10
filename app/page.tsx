import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import HowToJoin from '@/components/HowToJoin'
import Resources from '@/components/Resources'
import InstagramFeed from '@/components/InstagramFeed'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <HowToJoin />
      <Resources />
      <InstagramFeed />
      <Contact />
    </>
  )
}
