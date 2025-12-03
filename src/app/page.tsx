import Header from './components/Header'
import Hero from './components/Hero'
import Experts from './components/Experts'
import Services from './components/Services'
import Stats from './components/Stats'
import Gamification from './components/Gamification'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutProduct from "@/app/components/AboutTheProductSection";
import AboutTeam from "@/app/components/AboutTheTeamSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-0">
        <Hero />
        <AboutProduct />
        <Experts />
        <Stats />
        <Services />
        <Gamification />
        <Testimonials />
        <AboutTeam />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}