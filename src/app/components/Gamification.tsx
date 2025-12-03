"use client";

import { GOOGLE_PLAY_URL } from "../config/links";


export default function Gamification() {
  const levels = [
    {
      name: "bronce",
      label: "Bronce",
      color: "#B87333",
      benefits: [
        "Acceso básico a técnicos",
        "Soporte estándar",
        "Acceso a categorías principales",
      ],
    },
    {
      name: "plata",
      label: "Plata",
      color: "#C0C0C0",
      benefits: [
        "Técnicos verificados premium",
        "Soporte prioritario",
        "Descuentos exclusivos",
        "Acceso a todas las categorías",
      ],
    },
    {
      name: "oro",
      label: "Oro",
      color: "#FFD700",
      benefits: [
        "Técnicos elite certificados",
        "Soporte 24/7 personalizado",
        "Descuentos mayores en servicios",
        "Servicios gratuitos ocasionales",
        "Acceso prioritario a nuevos técnicos",
      ],
    },
  ];

  return (
      <section
          id="niveles"
          className="py-20"
          style={{ backgroundColor: "#29405A" }}
      >
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Título */}
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sistema de Niveles de Usuario
            </h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Sube de nivel según tu actividad y disfruta de beneficios exclusivos.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level, index) => (
                <div
                    key={index}
                    className="
                bg-white rounded-2xl p-8 border-4 shadow-2xl flex flex-col
                transition-all duration-300 transform cursor-pointer
                hover:-translate-y-3 hover:scale-[1.02]
              "
                    style={{ borderColor: level.color }}
                >
                  <div className="text-center mb-8">
                    <div
                        className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden shadow-xl"
                        style={{ backgroundColor: level.color }}
                    >
                      <img
                          src={`/img/${level.name}.png`}
                          alt={level.label}
                          className="w-full h-full object-cover"
                      />
                    </div>

                    <h3
                        className="text-3xl font-bold mb-2"
                        style={{ color: level.color }}
                    >
                      Nivel {level.label}
                    </h3>

                    <p className="text-[#29405A] font-semibold">
                      Beneficios exclusivos
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {level.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                    <span
                        className="text-lg mr-3 mt-1 flex-shrink-0"
                        style={{ color: level.color }}
                    >
                      ✓
                    </span>
                          <span className="text-[#29405A] text-lg">
                      {benefit}
                    </span>
                        </li>
                    ))}
                  </ul>

                  {/* BOTÓN REAL */}
                  <a
                      href={GOOGLE_PLAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full py-4 rounded-xl font-bold text-lg text-white text-center
                        transition-all duration-300 cursor-pointer transform
                        hover:scale-105
                        hover:text-[#FFD900]
                      "
                      style={{
                        backgroundColor: level.color, // color del nivel cuando NO hay hover
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#42CACA"; // color hover
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = level.color; // vuelve al color original
                      }}
                  >
                    Alcanzar Nivel
                  </a>


                </div>
            ))}
          </div>

          {/* Cómo subir de nivel */}
          <div
              className="text-center mt-16 rounded-2xl p-8 shadow-lg border border-[#42CACA]"
              style={{ backgroundColor: "#42CACA" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#FFD900]">
              ¿Cómo subir de nivel?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4">
                <div className="text-3xl mb-2">🔧</div>
                <h4 className="font-bold text-lg mb-2 text-[#FFD900]">
                  Contrata Servicios
                </h4>
                <p className="text-[#ffffff]">
                  Cada servicio te acerca al siguiente nivel
                </p>
              </div>

              <div className="text-center p-4">
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-bold text-lg mb-2 text-[#FFD900]">
                  Califica Técnicos
                </h4>
                <p className="text-[#ffffff]">
                  Tu feedback suma puntos adicionales
                </p>
              </div>

              <div className="text-center p-4">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-bold text-lg mb-2 text-[#FFD900]">
                  Recomienda Amigos
                </h4>
                <p className="text-[#ffffff]">
                  Comparte y gana recompensas
                </p>
              </div>
            </div>

            <button
                onClick={() => window.open(GOOGLE_PLAY_URL, "_blank")}
                className="bg-[#29405A] hover:bg-[#FFD900] text-white hover:text-[#29405A] px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Comenzar Ahora
            </button>
          </div>

        </div>
      </section>
  );
}

