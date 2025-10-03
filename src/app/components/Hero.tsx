import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen bg-gradient-to-br from-[#29405A] to-[#2247C0] text-white relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#42CACA] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FFD900] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left side - Content */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Servicios técnicos y de mantenimiento{' '}
              <span className="text-[#FFD900]">al instante</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-200">
              ¿Problemas en casa? Encuentra expertos en plomería, electricidad, pintura, carpintería y más, listos para ayudarte en minutos. En AlguienDijoChamba conectamos tu necesidad con el profesional ideal, fácil y seguro.
            </p>

            {/* Features */}
            <div className="space-y-4 mb-8">
              {[
                { icon: '🔧', text: 'Técnicos verificados.' },
                { icon: '⚡', text: 'Atención rápida.' },
                { icon: '📍', text: 'Cerca de ti.' }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="font-semibold text-lg">{feature.text}</span>
                </div>
              ))}
            </div>

            <p className="text-lg mb-8 text-gray-300">
              Solo dinos qué necesitas, y nosotros nos encargamos del resto. Tu relajate en casa.
            </p>

          </div>

          {/* Right side - Professional image */}
            <div className="animate-fade-in-up flex justify-center" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="w-80 h-96 bg-gradient-to-br from-[#42CACA] to-[#3E72AD] rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
              <Image 
                src="/img/tecnico_portada.jpg" 
                alt="Técnico profesional de AlguienDijoChamba" 
                width={320}
                height={384}
                className="w-full h-full object-cover rounded-2xl"
                priority
              />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FFD900] rounded-full flex items-center justify-center text-2xl animate-bounce">
              ⚡
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#42CACA] rounded-full flex items-center justify-center text-3xl animate-float">
              🔧
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}