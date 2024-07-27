import './App.css'
import Adventaje from './components/Adventaje'
import Companies from './components/Companies'
import CreditCard from './components/CreditCard'
import Dowloads from './components/Dowloads'
import Faqs from './components/Faqs'
import Hero from './components/Hero'
import Info from './components/Info'
import PerfectCard from './components/PerfectCard'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <main>
      {/*<img src="/assets/dora-layout.svg" alt="" className="layout-img" />*/}
      <Hero />
      <Info />
      <Companies />
      <Adventaje />
      <CreditCard />
      <PerfectCard />
      <Testimonials />
      <Faqs />
      <Dowloads />
    </main>
  )
}

export default App
