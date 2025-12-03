"use client";
import { useEffect, useRef, useState } from "react";

import { ABOUT_TEAM_VIDEO_URL } from "../config/links";

export default function AboutTeam() {
    const [visible, setVisible] = useState(false);

    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);
    return (
        <section id="about-team" className="py-16 bg-[#42CACA]" ref={sectionRef}>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Texto a la izquierda */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#FFD900]">Nuestro Equipo</h2>

                    <p className="text-lg leading-relaxed opacity-180 text-[#D9D9D9] font-semibold">
                        Conoce al equipo apasionado que impulsa AlguienDijoChamba. Estamos enfocados en
                        construir soluciones modernas que simplifiquen la búsqueda y contratación de técnicos
                        confiables para todo tipo de servicios.
                    </p>

                    <p className="text-lg leading-relaxed opacity-180 text-[#D9D9D9] font-semibold">
                        Nuestra experiencia combinada nos permite crear una plataforma eficiente, segura y
                        diseñada para que tanto clientes como técnicos encuentren oportunidades reales de
                        crecimiento y colaboración.
                    </p>
                </div>

                {/* Video a la derecha */}
                <div className={`
                        w-full transition-all duration-[1500ms] ease-in-out
                        ${visible ? "animate-slide-in-left-4" : "opacity-0 -translate-x-10"}
                    `}
                     style={{
                        animationDelay: "0.2s",
                        animationFillMode: "forwards"
                    }}>
                    <iframe
                        className="w-full h-64 md:h-80 rounded-xl shadow-lg"
                        src={ABOUT_TEAM_VIDEO_URL}
                        title="Video sobre el equipo"
                        allowFullScreen
                    />
                </div>

            </div>
        </section>
    );
}
