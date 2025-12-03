"use client";

import { useEffect, useRef, useState } from "react";


export default function Services() {
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
        { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const services = [
    {
      name: 'Electricidad',
      description: 'Instalaciones, reparaciones y mantenimiento eléctrico profesional',
      image: 'https://blogconexion.senati.edu.pe/wp-content/uploads/2023/09/Electricidad-01-scaled.jpg'
    },
    {
      name: 'Gasfitería',
      description: 'Reparación de fugas, instalación de tuberías y sistemas completos',
      image: 'https://gasfiteroenlimaperu.com/wp-content/uploads/2025/01/gasfitero-lima.webp'
    },
    {
      name: 'Mecanica',
      description: 'Soluciones integrales para sistemas hidraulicos o mecanicos',
      image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/LCWLLJF64VGYPPXZ75TW3QQG5Y.jpg'
    },
    {
      name: 'Cerrajería',
      description: 'Instalación, reparación y mantenimiento de cerraduras',
      image: 'https://panysdeseguretat.com/wp-content/uploads/2019/03/C%C3%B3mo-trabaja-un-cerrajero.jpg'
    },
    {
      name: 'Albañilería',
      description: 'Construcción, reparación y mantenimiento de estructuras',
      image: 'https://albanilests.com/wp-content/uploads/2022/08/servicio-de-remodelacion-de-casas-con-albaniles.jpg'
    },
    {
      name: 'Carpintería',
      description: 'Trabajos en madera, muebles personalizados y estructuras',
      image: 'https://salestec.edu.pe/inicio/wp-content/uploads/2023/10/Madera-Unidad1-PrehabilitadoMadera-768x512.jpg'
    }
  ]

  return (
    <section ref={sectionRef} id="servicios" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl mr-4">🔧</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#29405A]">
              Servicios
            </h2>
          </div>
          <p className="text-lg md:text-xl text-[#3E72AD] max-w-3xl mx-auto leading-relaxed">
            Contamos Con Profesionales De Distintas Áreas Para Brindarte 
            Soluciones Rápidas, Confiables Y De Calidad.
          </p>
          
          <div className="mt-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2247C0] italic mb-8">
              Ofrecemos Servicios Como:
            </h3>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-moveCards">
          {services.map((service, index) => (
              <div
                  key={index}
                  className={`
                      group relative bg-white rounded-2xl overflow-hidden shadow-lg
                      hover:shadow-2xl hover:scale-105 transition-transform duration-300
                      cursor-pointer
                      ${visible
                      ? "animate-fade-in-up animate-slide-in-left-3"
                      : "opacity-0 translate-x-10"
                  }
`}
                  style={{ animationDelay: `${index * 0.1}s` }}

              >
              {/* Service Image */}
              <div className="h-48 bg-gradient-to-br from-[#42CACA] to-[#3E72AD] flex items-center justify-center">
                {service.image.startsWith('http') ? (
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover rounded-t-2xl" />
                ) : (
                  <span className="text-6xl text-white">{service.image}</span>
                )}
              </div>
              
              {/* Service Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-[#29405A]">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}