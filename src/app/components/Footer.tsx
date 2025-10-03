export default function Footer() {
  return (
    <footer className="bg-[#29405A] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD900]">Sobre Nosotros</h3>
            <p className="text-[#D9D9D9] leading-relaxed">
              Descubre la mejor aplicación para contacta profesionales de áreas tecnicastécnicas.
            </p>
            <p className="text-[#D9D9D9] mt-2 leading-relaxed">
              Nuestra misión es conectar talento con oportunidades, facilitando el crecimiento profesional y el éxito de nuestros usuarios.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FFD900]">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-[#D9D9D9]">
              <li>• <a href="#inicio" className="hover:text-[#42CACA] transition-colors">Inicio</a></li>
              <li>• <a href="#producto" className="hover:text-[#42CACA] transition-colors">Producto</a></li>
              <li>• <a href="#servicios" className="hover:text-[#42CACA] transition-colors">Servicios</a></li>
              <li>• <a href="#testimonios" className="hover:text-[#42CACA] transition-colors">Testimonios</a></li>
              <li>• <a href="#contactanos" className="hover:text-[#42CACA] transition-colors">Contactanos</a></li>

            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#FFD900]">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
          href="https://www.facebook.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-15 h-15 bg-[#2247C0] rounded-full flex items-center justify-center text-white hover:bg-[#3E72AD] transition-colors"
          aria-label="Facebook"
              >
          <img src="https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png" alt="Facebook" className="w-15 h-15" />
              </a>
              <a 
          href="https://www.instagram.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-15 h-15 bg-[#42CACA] rounded-full flex items-center justify-center text-white hover:bg-[#3E72AD] transition-colors"
          aria-label="Instagram"
              >
          <img src="https://1000marcas.net/wp-content/uploads/2019/11/Instagram-Logo-2016.png" alt="Instagram" className="w-15 h-9" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#3E72AD] pt-8 text-center text-[#D9D9D9]">
          <p>&copy; 2025 AlguienDijoChamba. Todos Los Derechos Reservados.</p>
        </div>
      </div>
    </footer>
  )
}