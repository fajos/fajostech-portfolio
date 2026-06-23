import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  )
}