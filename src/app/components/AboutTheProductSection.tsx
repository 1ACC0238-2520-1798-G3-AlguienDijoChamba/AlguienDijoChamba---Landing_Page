"use client";

import {ABOUT_TEAM_PRODUCT_URL, ABOUT_TEAM_VIDEO_URL} from "../config/links";
import { useEffect, useRef, useState } from "react";

export default function AboutProduct() {
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
        <section className="py-20 bg-[#42CACA]" id="producto" ref={sectionRef}>
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* VIDEO IZQUIERDA */}
                <div
                    className={`
                        w-full transition-all duration-[1500ms] ease-in-out
                        ${visible ? "animate-slide-in-left-4" : "opacity-0 -translate-x-10"}
                    `}
                    style={{
                        animationDelay: "0.2s",
                        animationFillMode: "forwards"
                    }}
                >
                    <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={ABOUT_TEAM_PRODUCT_URL}
                            title="Video de presentación"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                {/* TEXTO DERECHA */}
                <div className="text-[#FFD900]">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Sobre el producto
                    </h2>

                    <p className="text-lg leading-relaxed opacity-180 text-[#D9D9D9] font-semibold" >
                        <strong>AlguienDijoChamba</strong> es una plataforma diseñada para conectar
                        de forma rápida y segura a usuarios con técnicos capacitados en distintas
                        especialidades. Nuestro sistema facilita la búsqueda, coordinación y
                        seguimiento de servicios sin complicaciones.
                    </p>

                    <p className="text-lg leading-relaxed opacity-180 mt-4 text-[#D9D9D9] font-semibold">
                        Desde gestionar solicitudes hasta manejar pagos y visitas, AlguienDijoChamba
                        optimiza todo el flujo de contratación, brindando una experiencia más
                        eficiente tanto para técnicos como para clientes.
                    </p>
                </div>

            </div>
        </section>
    );
}

