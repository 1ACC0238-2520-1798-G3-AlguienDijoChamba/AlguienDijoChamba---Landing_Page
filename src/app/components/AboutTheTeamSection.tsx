import { ABOUT_TEAM_VIDEO_URL } from "../config/links";

export default function AboutTeam() {
    return (
        <section id="about-team" className="py-16 bg-[#42CACA]">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Texto a la izquierda */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-[#FFD900]">Nuestro Equipo</h2>
                    <h3 className="text-xl font-semibold mb-4 text-[#FFD900]">Sobre el equipo</h3>

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
                <div className="w-full">
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
