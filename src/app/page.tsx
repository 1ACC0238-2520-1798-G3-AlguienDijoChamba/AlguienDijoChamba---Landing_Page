import Header from './components/Header'
import Hero from './components/Hero'
import Experts from './components/Experts'
import Services from './components/Services'
import Stats from './components/Stats'
import Gamification from './components/Gamification'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Hero />
        <Experts />
        <Stats />
        <Services />
        <Gamification />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}