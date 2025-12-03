"use client";
import { GOOGLE_PLAY_URL } from "../config/links";

import { useEffect, useRef, useState } from "react";

export default function Experts() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hoverCard, setHoverCard] = useState<number | null>(null);

  const cards = [
    { id: 1, title: "Pintor", pos: "tl", img: "https://pinturashipopotamo.es/wp-content/uploads/2019/12/pintores-para-particulares.jpg", desc: "Expertos en pintura interior y exterior. Acabados profesionales y trabajo limpio." },
    { id: 2, title: "Enfermería Técnica", pos: "tr", img: "https://istsanpablo.edu.pe/wp-content/uploads/2022/03/Enfermeria-Tecnica.jpg", desc: "Atención domiciliaria segura y confiable por profesionales certificados." },
    { id: 3, title: "Soldadura", pos: "bl", img: "https://aprendeya.com.co/wp-content/uploads/2024/05/istockphoto-1135169078-612x612-1.jpg", desc: "Soldadores especializados en estructuras, reparaciones y fabricación." },
    { id: 4, title: "Limpieza", pos: "br", img: "https://limpiezasalfil.com/wp-content/uploads/2020/02/tecnicas-limpieza-profesional.jpg", desc: "Servicio de limpieza profunda para casas, oficinas y negocios." }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
        { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const getHoverTransform = (pos: string) => {
    switch(pos){
      case "tl": return "origin-top-left scale-[1.6] translate-x-[20px] translate-y-[20px]";
      case "tr": return "origin-top-right scale-[1.6] -translate-x-[20px] translate-y-[20px]";
      case "bl": return "origin-bottom-left scale-[1.6] translate-x-[20px] -translate-y-[20px]";
      case "br": return "origin-bottom-right scale-[1.6] -translate-x-[20px] -translate-y-[20px]";
      default: return "";
    }
  }

  const getInitialOffset = (pos: string) => {
    switch(pos){
      case "tl": return "-translate-x-[20px]";
      case "tr": return "translate-x-[30px] -translate-y-[30px]"; // Enfermería técnica más a la derecha
      case "bl": return "-translate-x-[30px] translate-y-[30px]";
      case "br": return "translate-x-[20px]"; // Limpieza más abajo
      default: return "";
    }
  }

  return (
      <section
          id="producto"
          ref={sectionRef}
          className="py-20 bg-[#29405A] relative overflow-hidden"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20 items-start"> {/* más espacio con gap-20 */}

            {/* LEFT TEXT */}
            {/* Texto */}
            <div
                className={`transition-all duration-[2000ms] ease-in-out ${
                    visible ? "-translate-x-10 opacity-100 animate-moveText" : "-translate-x-500 opacity-0"
                }`}
                style={{ animationPlayState: visible ? "running" : "paused" }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#42CACA] leading-tight">
                EXPERTOS EN REPARACIONES Y MEJORAS DEL HOGAR
              </h2>
              <p className="text-lg mb-8 text-white leading-relaxed">
                ¿Tienes una fuga, necesitas pintar tu casa o instalar una campana extractora? En AlguienDijoChamba te conectamos con profesionales confiables en plomería, electricidad, pintura, carpintería y mucho más.
              </p>
              <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#42CACA";
                    e.currentTarget.style.color = "#FFD900";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFD900";
                    e.currentTarget.style.color = "#29405A";
                  }}
                  className="
                    inline-block
                    px-8 py-4
                    rounded-xl font-bold text-lg
                    transition-all duration-300 transform
                    cursor-pointer shadow-lg
                    hover:scale-105
                  "
                  style={{
                    backgroundColor: "#FFD900",
                    color: "#29405A",
                  }}
              >
                VER MÁS
              </a>


            </div>

            {/* RIGHT GRID */}
            {/* Grid de cards */}
            <div
                className={`relative grid grid-cols-2 gap-4 h-[350px] transition-all duration-[2000ms] ease-in-out ${
                    visible ? "translate-x-20 opacity-100 animate-moveCards" : "translate-x-400 opacity-0"
                }`}
                style={{ animationPlayState: visible ? "running" : "paused" }}
            >
              {cards.map((c) => (
                  <div
                      key={c.id}
                      onMouseEnter={() => setHoverCard(c.id)}
                      onMouseLeave={() => setHoverCard(null)}
                      className={`relative bg-white rounded-2xl shadow-lg cursor-pointer transition-all duration-[1500ms] ease-in-out
                  ${getInitialOffset(c.pos)}
                  ${hoverCard === c.id ? `absolute z-50 w-[180%] ${getHoverTransform(c.pos)} p-6` : "h-32 p-4"}
                `}
                  >
                    {hoverCard === c.id ? (
                        <div className="flex items-start gap-6 w-full h-full">
                          <img src={c.img} className="w-36 h-36 rounded-xl object-cover transition-all duration-[1500ms]" />
                          <div className="text-left text-[#29405A] transition-all duration-[1500ms]">
                            <p className="text-2xl font-bold">{c.title}</p>
                            <p className="mt-2 text-lg">{c.desc}</p>
                          </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                          <img src={c.img} alt={c.title} className="w-16 h-16 rounded-full mb-2 object-cover transition-all duration-[1500ms]" />
                          <p className="text-sm font-semibold text-[#29405A]">{c.title}</p>
                        </div>
                    )}
                  </div>
              ))}
            </div>

          </div>
        </div>
      </section>
  );
}

