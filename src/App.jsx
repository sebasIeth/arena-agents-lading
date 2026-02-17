import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Arena from './components/Arena'
import WhyAgents from './components/WhyAgents'
import StatsBand from './components/StatsBand'
import EarlyAccess from './components/EarlyAccess'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-cream text-ink font-sans text-lg leading-relaxed">
      <Nav />
      <Hero />
      <HowItWorks />
      <Arena />
      <WhyAgents />
      <StatsBand />
      <EarlyAccess />
      <Footer />
    </div>
  )
}
