'use client'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Selección automática de logo
  const logoSrc = (() => {
    if (isMobile) {
      return isScrolled
          ? '/img/logo_ADC_White.png'   // móvil + scrolleado
          : '/img/logo_ADC_Blue.png'    // móvil + transparente
    } else {
      return isScrolled
          ? '/img/logo_ADC_FULL_White.png' // desktop + scrolleado
          : '/img/logo_ADC_FULL_Blue.png'  // desktop + transparente
    }
  })()

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${isScrolled ? 'bg-[#2563EB] shadow-lg' : 'bg-transparent'}`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">

          {/* LOGO AUTOMÁTICO */}
          <div className="flex items-center">
            <img
                src={logoSrc}
                alt="Logo ADC"
                className="responsive-img"
                style={{
                  height: isMobile ? '60px' : '60px',
                  width: 'auto'
                }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center text-white text-[20px] relative space-x-20">

            {/* Línea inferior global del header */}

            {[
              ['inicio', 'Inicio'],
              ['producto', 'Producto'],
              ['servicios', 'Servicio'],
              ['testimonios', 'Testimonio'],
              ['contactanos', 'Contáctanos']
            ].map(([id, label]) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className="hover:text-[#42CACA] transition-colors pb-3 relative group bottom-[-8px]"
                >
                  {label}

                  {/* Línea animada pero alineada a la parte baja del nav */}
                  <span className=" absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#42CACA] transition-all duration-300 group-hover:w-[150%]"/>
                </a>
            ))}
          </nav>


          {/* Desktop Play Store */}
          <a className="hidden md:block" href="#">
            <img
                src="/img/GooglePlayButton_Version_Dark.png"
                alt="Descargar en Play Store"
                className="responsive-img h-13"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-white/20 pt-4 text-white bg-[#2563EB] bg-opacity-90">
              <div className="flex flex-col space-y-4 px-4 text-[20px]">
                {[
                  ['inicio', 'Inicio'],
                  ['producto', 'Producto'],
                  ['servicios', 'Servicio'],
                  ['testimonios', 'Testimonio'],
                  ['contactanos', 'Contáctanos']
                ].map(([id, label]) => (
                    <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)}>
                      {label}
                    </a>
                ))}

                {/* Mobile Play Store */}
                <img
                    src="/img/GooglePlayButton_Version_Dark.png"
                    className="max-w-[250px] w-full h-auto mx-auto"
                />
              </div>
            </nav>
        )}
      </header>
  )
}
