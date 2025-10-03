'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contactanos" className="py-20 bg-gradient-to-b from-white to-[#D9D9D9] relative">
      {/* Background image area */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1200/600')] bg-cover bg-center opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2247C0]">Contacto</h2>
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl">💡</span>
          </div>
          <p className="text-lg text-[#2247C0] max-w-2xl mx-auto">
            There's Nothing We Like More Than Rolling Up Our Sleeves And Starting A Brand New Project. Let's Make Something Great Together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Form */}
          <div className="bg-[#29405A] rounded-2xl p-8 text-white">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#D9D9D9] text-[#29405A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42CACA]"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Correo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#D9D9D9] text-[#29405A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42CACA]"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#D9D9D9] text-[#29405A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#42CACA]"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#666666] hover:bg-[#555555] text-white py-3 rounded-lg font-semibold transition-colors"
              >
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}