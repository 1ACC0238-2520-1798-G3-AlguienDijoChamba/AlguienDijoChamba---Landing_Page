export default function Testimonials() {
  const testimonials = [
    {
      quote: "Gracias al AlguienDijoChamba, arregle una fuga de agua que estaba elevando mi recibo de pago.",
      author: "Renzo Perez",
      location: "Lima",
      image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww", 
      rating: 5
    },
    {
      quote: "La facilidad de encontrar técnicos capacitados y serguros es muy buena. Super recomendado.", 
      author: "Jorge Molina",
      location: "Lima",
      image: "https://static.vecteezy.com/system/resources/previews/036/442/773/non_2x/ai-generated-portrait-of-a-young-japanese-man-no-facial-expression-half-body-shot-facing-the-camera-isolated-white-background-ai-generative-free-photo.jpg", 
      rating: 5
    },
    {
      quote: "La instalación fue rápida y el soporte técnico muy amable. Lo recomiendo totalmente.",
      author: "Andrea Palma",
      location: "Lima", 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIzV2ucZYW8AGWHDmOGnd7KIv8YIvDbjh3HzQrN2seTYCqpa4uFGqiDwL_NCrzX4JnHk&usqp=CAU", 
      rating: 5
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-[#FFD900]' : 'text-gray-300'}`}>
        ⭐
      </span>
    ))
  }

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-b from-[#3E72AD] to-[#29405A] text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Testimonios
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              {/* Profile Image */}
              <div className="w-30 h-30 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gradient-to-br from-[#42CACA] to-[#3E72AD]">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.author} profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quote */}
              <p className="text-lg text-[#29405A] mb-6 leading-relaxed italic">
                &quot;{testimonial.quote}&quot;
              </p>
              
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Author */}
              <div className="text-center">
                <div className="font-bold text-[#2247C0] text-lg italic">
                  — {testimonial.author}, {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}