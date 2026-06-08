import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ForWhom from './components/ForWhom'
import Curriculum from './components/Curriculum'
import MeetRebien from './components/MeetRebien'
import Pricing, { WinnersCircle } from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ForWhom />
      <Curriculum />
      <MeetRebien />
      <Pricing />
      <WinnersCircle />
      <FAQ />
      <Footer />
    </>
  )
}

export default App