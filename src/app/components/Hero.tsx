"use client";

import { useState, useEffect } from "react";
import { GOOGLE_PLAY_URL } from "../config/links";

export default function Hero() {
  /* -------------------------------------------------------------- */
  /* CONFIGURACIÓN GENERAL */
  /* -------------------------------------------------------------- */

  const USER_SECTIONS = [0, 2, 1];
  const TEC_SECTIONS = [3, 5, 4];

  const DURATION = 5000;
  const [section, setSection] = useState(0);
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("user");

  /* -------------------------------------------------------------- */
  /* AUTO PLAY + PROGRESO */
  /* -------------------------------------------------------------- */
  useEffect(() => {
    setProgress(0);

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextSection();
          return 0;
        }
        return p + 1.5;
      });
    }, DURATION / 70);

    return () => clearInterval(timer);
  }, [section, mode]);

  /* -------------------------------------------------------------- */
  /* CAMBIO AUTOMÁTICO ENTRE SECCIONES */
  /* -------------------------------------------------------------- */
  const nextSection = () => {
    setSection((prev) => {
      if (mode === "user") {
        if (prev < 0 || prev > 2) return 0;
        return prev >= 2 ? 0 : prev + 1;
      } else {
        if (prev < 3 || prev > 5) return 3;
        return prev >= 5 ? 3 : prev + 1;
      }
    });
  };

  const gotoSection = (target: number) => {
    setSection(target);
    setProgress(0);
  };

  /* -------------------------------------------------------------- */
  /* DATOS */
  /* -------------------------------------------------------------- */
  const SECTIONS = [
    // USER
    {
      bg: "/img/fondo_hero/Fondo1.jpg",
      title: "Servicios técnicos y de mantenimiento al instante",
      subtitle: "¿Problemas en casa? Encuentra expertos aquí",
      button: "¡Contrata ya!",
      align: "right",
    },
    {
      bg: "/img/fondo_hero/Fondo2.jpg",
      title: "Tu técnico de confianza, en minutos.",
      subtitle: "Conecta con profesionales verificados listos para ayudarte.",
      button: "Contratar ya",
      align: "right",
    },
    {
      bg: "/img/fondo_hero/Fondo3.jpg",
      title: "La manera moderna de pedir ayuda en casa.",
      subtitle: "Sin llamadas, sin complicaciones.",
      button: "Conocer la app",
      align: "left",
    },

    // TECNICOS
    {
      bg: "/img/fondo_hero/Fondo7.jpg",
      title: "Cuando lo necesitas, alguien dijo chamba.",
      subtitle: "Encuentra clientes reales todos los días.",
      button: "Ofrecer mis servicios",
      align: "right",
    },
    {
      bg: "/img/fondo_hero/Fondo5.jpg",
      title: "Que tu esfuerzo sea recompensado",
      subtitle: "Establece tus tarifas y recibe pagos sin retrasos.",
      button: "Regístrate ya",
      align: "right",
    },
    {
      bg: "/img/fondo_hero/Fondo6.jpg",
      title: "Tu trabajo, más visible que nunca.",
      subtitle: "Publica tu especialidad y conecta con clientes reales.",
      button: "Comenzar ahora",
      align: "split",
    },
  ];

  const current = SECTIONS[section];
  const dots = mode === "user" ? USER_SECTIONS : TEC_SECTIONS;

  /* -------------------------------------------------------------- */
  /* RENDER */
  /* -------------------------------------------------------------- */
  return (
      <section
          className="relative min-h-screen w-full bg-cover bg-center flex items-center"
          style={{ backgroundImage: `url('${current.bg}')` }}
      >
        {/* -------------------------------------------------------------- */}
        {/* SWITCH USER / TECNICOS */}
        {/* -------------------------------------------------------------- */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 flex gap-4 z-50">
          <button
              onClick={() => {
                setMode("user");
                setSection(0);
              }}
              className={`
            px-4 py-2 rounded-xl backdrop-blur-md 
            transition-all duration-200 cursor-pointer
            ${mode === "user" ? "bg-white/40" : "bg-black/30"}
            text-white hover:text-yellow-300 text-outline
          `}
          >
            Usuario
          </button>

          <button
              onClick={() => {
                setMode("tecnico");
                setSection(3);
              }}
              className={`
            px-4 py-2 rounded-xl backdrop-blur-md 
            transition-all duration-200 cursor-pointer
            ${mode === "tecnico" ? "bg-white/40" : "bg-black/30"}
            text-white hover:text-yellow-300 text-outline
          `}
          >
            Técnico
          </button>
        </div>

        {/* -------------------------------------------------------------- */}
        {/* CONTENIDO SPLIT */}
        {/* -------------------------------------------------------------- */}
        {current.align === "split" ? (
            <div
                className="relative z-10 flex justify-between items-start w-full px-30 gap-10"
                style={{ marginTop: "40px" }}
            >
              {/* Título */}
              <div className="bg-black/40 p-6 rounded-xl shadow-lg w-[30%] text-right text-white">
                <h1 className="text-6xl font-bold">{current.title}</h1>
              </div>

              {/* Subtítulo + Botón */}
              <div className="bg-black/40 p-6 rounded-xl shadow-lg w-[20%] text-white">
                <p style={{ fontSize: "25px" }} className="mb-6">
                  {current.subtitle}
                </p>

                {/* BOTÓN ACTUALIZADO */}
                <button
                    onClick={() => window.open(GOOGLE_PLAY_URL, "_blank")}
                    className="
                px-6 py-3 font-bold rounded-lg shadow-md cursor-pointer
                transition-all duration-300 transform hover:scale-105
              "
                    style={{
                      backgroundColor: "#FFD900",
                      color: "#29405A",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#29405A";
                      e.currentTarget.style.color = "#FFD900";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFD900";
                      e.currentTarget.style.color = "#29405A";
                    }}
                >
                  {current.button}
                </button>
              </div>
            </div>
        ) : (
            /* -------------------------------------------------------------- */
            /* MODO NORMAL */
            /* -------------------------------------------------------------- */
            <div
                className={`
            relative z-10 max-w-2xl 
            p-8 rounded-2xl backdrop-blur-sm bg-black/30 text-white shadow-xl
            ${current.align === "right" ? "ml-auto mr-20" : ""}
            ${current.align === "left" ? "ml-20" : ""}
          `}
                style={{ marginTop: "40px" }}
            >
              <h1 className="text-6xl font-extrabold mb-4">{current.title}</h1>
              <p style={{ fontSize: "25px" }} className="mb-6">
                {current.subtitle}
              </p>

              {/* BOTÓN ACTUALIZADO */}
              <button
                  onClick={() => window.open(GOOGLE_PLAY_URL, "_blank")}
                  className="
              px-6 py-3 font-bold rounded-lg shadow-md cursor-pointer
              transition-all duration-300 transform hover:scale-105
            "
                  style={{
                    backgroundColor: "#FFD900",
                    color: "#29405A",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#42CACA";
                    e.currentTarget.style.color = "#FFD900";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#FFD900";
                    e.currentTarget.style.color = "#29405A";
                  }}
              >
                {current.button}
              </button>
            </div>
        )}

        {/* -------------------------------------------------------------- */}
        {/* DOTS DE NAVEGACIÓN */}
        {/* -------------------------------------------------------------- */}
        <div className="absolute bottom-10 w-full flex justify-center gap-4 z-40">
          {dots.map((i) => {
            const isActive = i === section;
            return (
                <div
                    key={i}
                    onClick={() => gotoSection(i)}
                    className="relative w-5 h-5 rounded-full bg-white/40 cursor-pointer overflow-hidden"
                >
                  {/* progreso */}
                  <div
                      className="absolute left-0 top-0 h-full bg-white pointer-events-none"
                      style={{
                        width: isActive ? `${progress}%` : "0%",
                        transition: "width 0.1s linear",
                      }}
                  />
                </div>
            );
          })}
        </div>
      </section>
  );
}
