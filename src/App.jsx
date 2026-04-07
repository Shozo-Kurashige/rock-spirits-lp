import './index.css'
import HeroSection from './components/HeroSection'
import MessageSection from './components/MessageSection'
import ServicesSection from './components/ServicesSection'
import ProductsSection from './components/ProductsSection'
import CompanySection from './components/CompanySection'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import EmberParticles from './components/EmberParticles'
import IntroAnimation from './components/IntroAnimation'

function App() {
  return (
    <div className="relative bg-black min-h-screen overflow-x-hidden">
      <IntroAnimation />
      <EmberParticles />
      <Navigation />
      <main>
        <HeroSection />
        <MessageSection />
        <ServicesSection />
        <ProductsSection />
        <CompanySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
