export default function Stats() {
  const stats = [
    { number: '+6', label: 'Categorías' },
    { number: '+50', label: 'Profesionales' },
    { number: '+600', label: 'Usuarios Registrados' },
    { number: '+300', label: 'Recomendaciones' }
  ];

  return (
      <section className="bg-[#42CACA] w-full flex justify-center py-12">
        <div className="w-full max-w-7xl px-6 mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 text-center justify-center justify-items-center">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="transform translate-x-[0%] opacity-0 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards'}}
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
