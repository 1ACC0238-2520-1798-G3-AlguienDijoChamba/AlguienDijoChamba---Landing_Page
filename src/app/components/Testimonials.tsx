"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Gracias al AlguienDijoChamba, arreglé una fuga en minutos. El técnico fue puntual y dejó todo funcionando perfecto.",
      author: "Renzo Perez",
      location: "Lima",
      image: "img/testimonios/testimonio.avif",
      rating: 5
    },
    {
      quote: "Técnicos confiables y súper profesionales. Me explicaron todo y el trabajo quedó excelente.",
      author: "Jorge Molina",
      location: "Lima",
      image: "img/testimonios/testimonio2.jpg",
      rating: 5
    },
    {
      quote: "Instalación rápida y trato amable. El técnico resolvió incluso detalles adicionales sin costo.",
      author: "Andrea Palma",
      location: "Lima",
      image: "img/testimonios/testimonio3.avif",
      rating: 5
    },
    {
      quote: "Servicio técnico de primera. Agendar fue fácil y el resultado superó mis expectativas.",
      author: "Luis García",
      location: "Callao",
      image: "img/testimonios/testimonio4.jpg",
      rating: 5
    },
    {
      quote: "Muy profesionales. Encontré ayuda urgente y el servicio fue rápido y eficiente.",
      author: "María Torres",
      location: "Arequipa",
      image: "img/testimonios/testimonio5.jpg",
      rating: 5
    },
    {
      quote: "Solucionaron un fallo eléctrico complicado y me explicaron todo con claridad.",
      author: "Carlos Mejía",
      location: "Cusco",
      image: "img/testimonios/testimonio6.jpg",
      rating: 5
    },
    {
      quote: "Encontré un técnico en minutos y el servicio fue impecable. Muy recomendado.",
      author: "Valeria Campos",
      location: "Trujillo",
      image: "img/testimonios/testimonio7.jpg",
      rating: 5
    },
    {
      quote: "Puntual, rápido y muy profesional. Excelente atención de inicio a fin.",
      author: "Diego Salazar",
      location: "Piura",
      image: "img/testimonios/testimonio8.jpg",
      rating: 5
    }
  ];



  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#29405A]">
            Testimonios
          </h2>

          <div className="relative">

            {/* Borde del carrusel */}
            <div className="overflow-hidden  rounded-2xl" ref={emblaRef}>
              {/* Slides */}
              <div className="flex">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="
                    flex-shrink-0
                    basis-[33.333%]
                    px-4
                  "
                    >
                      <div className="w-full h-[400px] bg-[#29405A] rounded-2xl p-8 text-white shadow-lg flex flex-col">
                        <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#42CACA]">
                          <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                        </div>

                        <p className="italic mb-4 leading-relaxed text-white text-center flex-grow">
                          &quot;{t.quote}&quot;
                        </p>

                        <div className="flex justify-center mb-4">
                          {Array.from({ length: 5 }).map((_, idx) => (
                              <span key={idx} className={`text-xl ${idx < t.rating ? "text-[#FFD900]" : "text-gray-500"}`}>
                          ⭐
                        </span>
                          ))}
                        </div>

                        <div className="text-center font-bold text-[#42CACA] text-lg italic">
                          — {t.author}, {t.location}
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Flecha Izquierda – afuera del carrusel */}
            <button
                onClick={scrollPrev}
                className="
                  absolute -left-16 top-1/2 -translate-y-1/2
                  bg-[#29405A] text-white w-12 h-12 rounded-full shadow-lg
                  flex items-center justify-center text-2xl
                  hover:bg-[#1f3247] transition
                "
            >
              ‹
            </button>

            {/* Flecha Derecha – afuera del carrusel */}
            <button
                onClick={scrollNext}
                className="
                  absolute -right-16 top-1/2 -translate-y-1/2
                  bg-[#29405A] text-white w-12 h-12 rounded-full shadow-lg
                  flex items-center justify-center text-2xl
                  hover:bg-[#1f3247] transition
                "
            >
              ›
            </button>

          </div>
        </div>
      </section>
  );
}




