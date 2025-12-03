"use client";

import { useEffect, useRef, useState } from "react";


export default function Stats() {
    const [visible, setVisible] = useState(false);

    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
            {threshold: 0.2}
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
    }, []);
    const stats = [
        {number: '+6', label: 'Categorías'},
        {number: '+50', label: 'Profesionales'},
        {number: '+600', label: 'Usuarios Registrados'},
        {number: '+300', label: 'Recomendaciones'}
    ];

    return (
        <section
            ref={sectionRef}
            className="bg-[#42CACA] w-full flex justify-center py-12"
        >
            <div className="w-full max-w-7xl px-6 mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center justify-center justify-items-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`
              transform
              ${visible ? "animate-slide-in-left-4" : "translate-x-[20%] opacity-0"}
            `}
                            style={{
                                animationDelay: `${index * 0.3}s`,
                                animationFillMode: "forwards",
                            }}
                        >
                            <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#FFD900] mb-4">
                                {stat.number}
                            </div>
                            <div className="text-xl md:text-2xl font-semibold text-white">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
