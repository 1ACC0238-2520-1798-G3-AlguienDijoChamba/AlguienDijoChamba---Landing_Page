export default function Experts() {
  return (
    <section id="producto" className="py-20 bg-[#D9D9D9] relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#2247C0] leading-tight">
              EXPERTOS EN REPARACIONES Y MEJORAS DEL HOGAR
            </h2>
            
            <p className="text-lg mb-8 text-[#29405A] leading-relaxed">
              ¿Tienes una fuga, necesitas pintar tu casa o instalar una campana extractora?
              En AlguienDijoChamba te conectamos con profesionales confiables en 
              plomería, electricidad, pintura, carpintería y mucho más.
            </p>

            <button className="bg-[#FFD900] hover:bg-yellow-400 text-[#29405A] text-lg px-8 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105">
              VER MÁS
            </button>
          </div>

          {/* Right side - Image grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            {/* Top row */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-4 shadow-lg h-32 flex items-center justify-center">
              <div className="text-center">
                <img src="https://pinturashipopotamo.es/wp-content/uploads/2019/12/pintores-para-particulares.jpg" alt="Pintor" className="w-16 h-16 rounded-full mb-2" />
                <p className="text-sm font-semibold text-[#29405A]">Pintor</p>
              </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg h-32 flex items-center justify-center">
              <div className="text-center">
                <img src="https://istsanpablo.edu.pe/wp-content/uploads/2022/03/Enfermeria-Tecnica.jpg" alt="Enfermeria" className="w-16 h-16 rounded-full mb-2" />
                <p className="text-sm font-semibold text-[#29405A]">Enfermeria<br></br> Técnica</p>
              </div>
              </div>
            </div>
            
            {/* Bottom row */}
            <div className="space-y-4 mt-8">
              <div className="bg-white rounded-2xl p-4 shadow-lg h-32 flex items-center justify-center">
              <div className="text-center">
                <img src="https://aprendeya.com.co/wp-content/uploads/2024/05/istockphoto-1135169078-612x612-1.jpg" alt="Soldadura" className="w-16 h-16 rounded-full mb-2" />
                <p className="text-sm font-semibold text-[#29405A]">Soldadura</p>
              </div>
              </div>
              <div className="bg-white rounded-2xl p-4 shadow-lg h-32 flex items-center justify-center">
              <div className="text-center">
                <img src="https://limpiezasalfil.com/wp-content/uploads/2020/02/tecnicas-limpieza-profesional.jpg" alt="Limpieza" className="w-16 h-16 rounded-full mb-2" />
                <p className="text-sm font-semibold text-[#29405A]">Limpieza</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}