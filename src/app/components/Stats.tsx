export default function Stats() {
  const stats = [
    { number: '+6', label: 'Categorías' },
    { number: '+50', label: 'Profesionales' },
    { number: '+600', label: 'Usuarios Registros' },
    { number: '+300', label: 'Recomendaciones' }
  ]

  return (
    <section className="bg-[#D9D9D9] pb-0">
      <div className="bg-[#29405A] text-white rounded-t-none rounded-b-[3rem] mx-4 md:mx-8 lg:mx-16">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFD900] mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}