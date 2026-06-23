import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import TechStack from './components/TechStack'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import Process from './components/Process'
import FAQ from './components/FAQ'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <TechStack />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
    </main>
  )
}
