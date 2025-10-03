export default function Gamification() {
  const levels = [
    {
      name: 'Bronce',
      color: '#CD7F32',
      benefits: [
        'Acceso básico a técnicos',
        'Soporte estándar',
        'Acceso a categorías principales'
      ]
    },
    {
      name: 'Plata',
      color: '#C0C0C0',
      benefits: [
        'Técnicos verificados premium',
        'Soporte prioritario',
        'Descuentos exclusivos',
        'Acceso a todas las categorías'
      ]
    },
    {
      name: 'Oro',
      color: '#FFD700',
      benefits: [
        'Técnicos elite certificados',
        'Soporte 24/7 personalizado',
        'Descuentos mayores en servicios',
        'Servicios gratuitos ocasionales',
        'Acceso prioritario a nuevos técnicos'
      ]
    }
  ]

  return (
    <section id="niveles" className="py-20 bg-gradient-to-b from-[#D9D9D9] to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#29405A]">
            Sistema de Niveles de Usuario
          </h2>
          <p className="text-xl text-[#3E72AD] max-w-3xl mx-auto">
            Sube de nivel según tu actividad y disfruta de beneficios exclusivos en nuestros servicios de reparación y mantenimiento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-xl border-4 transition-all duration-300 hover:scale-105"
              style={{ borderColor: level.color }}
            >
              <div className="text-center mb-8">
                <div 
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                  style={{ backgroundColor: level.color }}
                >
                  {level.name.charAt(0)}
                </div>
                <h3 
                  className="text-3xl font-bold mb-2"
                  style={{ color: level.color }}
                >
                  Nivel {level.name}
                </h3>
                <p className="text-[#29405A] font-semibold">
                  Beneficios exclusivos
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {level.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start">
                    <span 
                      className="text-lg mr-3 mt-1 flex-shrink-0"
                      style={{ color: level.color }}
                    >
                      ✓
                    </span>
                    <span className="text-[#29405A] text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className="w-full py-4 rounded-xl font-bold text-lg text-white transition-all duration-300 hover:shadow-lg hover:brightness-110"
                style={{ backgroundColor: level.color }}
              >
                Alcanzar Nivel
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-white rounded-2xl p-8 shadow-lg border border-[#42CACA]">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#29405A]">
            ¿Cómo subir de nivel?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="text-3xl mb-2">🔧</div>
              <h4 className="font-bold text-lg mb-2 text-[#2247C0]">Contrata Servicios</h4>
              <p className="text-[#29405A]">Cada servicio de reparación te acerca al siguiente nivel</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">⭐</div>
              <h4 className="font-bold text-lg mb-2 text-[#2247C0]">Califica Técnicos</h4>
              <p className="text-[#29405A]">Tu feedback te da puntos extra</p>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-bold text-lg mb-2 text-[#2247C0]">Recomienda Amigos</h4>
              <p className="text-[#29405A]">Comparte y gana recompensas</p>
            </div>
          </div>
          <button className="bg-[#2247C0] hover:bg-[#3E72AD] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
            Comenzar Ahora
          </button>
        </div>
      </div>
    </section>
  )
}