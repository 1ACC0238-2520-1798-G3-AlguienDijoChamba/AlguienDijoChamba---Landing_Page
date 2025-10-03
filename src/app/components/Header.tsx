'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#29405A] text-white p-4 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-2xl">🔧</span>
            <span className="text-xl font-bold">AlguienDijoChamba</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-[#42CACA] transition-colors">Inicio</a>
          <a href="#producto" className="hover:text-[#42CACA] transition-colors">Producto</a>
          <a href="#servicios" className="hover:text-[#42CACA] transition-colors">Servicio</a>
          <a href="#testimonios" className="hover:text-[#42CACA] transition-colors">Testimonio</a>
          <a href="#contactanos" className="hover:text-[#42CACA] transition-colors">Contáctanos</a>
        </nav>
        
        {/* Desktop CTA Button */}
        <button className="hidden md:block bg-[#2247C0] hover:bg-[#3E72AD] text-white px-6 py-2 rounded-lg transition-colors font-bold">
          Descargar Aplicación
        </button>
        
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
        <nav className="md:hidden mt-4 pb-4 border-t border-[#3E72AD] pt-4">
          <div className="flex flex-col space-y-4">
            <a href="#inicio" className="hover:text-[#42CACA] transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</a>
            <a href="#producto" className="hover:text-[#42CACA] transition-colors" onClick={() => setIsMenuOpen(false)}>Producto</a>
            <a href="#servicios" className="hover:text-[#42CACA] transition-colors" onClick={() => setIsMenuOpen(false)}>Servicio</a>
            <a href="#testimonios" className="hover:text-[#42CACA] transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonio</a>
            <a href="#contactanos" className="hover:text-[#42CACA] transition-colors" onClick={() => setIsMenuOpen(false)}>Contáctanos</a>
            <button className="bg-[#2247C0] hover:bg-[#3E72AD] text-white px-6 py-2 rounded-lg transition-colors font-bold w-full">
              Descargar Aplicación
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}