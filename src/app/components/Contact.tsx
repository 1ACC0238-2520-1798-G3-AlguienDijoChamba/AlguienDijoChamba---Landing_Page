'use client'

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    message: ""
  });

  const validateForm = () => {
    const newErrors: FormErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo es obligatorio";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Correo inválido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Formulario enviado:", formData);
    alert("Mensaje enviado correctamente");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
      <section
          id="contactanos"
          className="
        py-20
        relative
        bg-cover
        bg-center
        bg-no-repeat
      "
          style={{
            backgroundImage: "url('/img/messageSection.JPG')"
          }}
      >
        <div className="container mx-auto px-4 relative z-10">

          {/* ENCABEZADO */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#29405A]">Contacto</h2>
            <div className="flex items-center justify-center mb-6"></div>
          </div>

          {/* CONTENEDOR PRINCIPAL */}
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

            {/* FORMULARIO CARD */}
            <div
                className="
              bg-[#29405A]
              rounded-2xl
              p-8
              text-white
              shadow-2xl
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:-translate-y-2
            "
            >
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white text-[#29405A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29405A]"
                  />
                  {errors.name && <p className="text-[#FFD900] text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Correo</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white text-[#29405A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29405A]"
                  />
                  {errors.email && <p className="text-[#FFD900] text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white text-[#29405A] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#29405A]"
                  />
                  {errors.message && <p className="text-[#FFD900] text-sm mt-1">{errors.message}</p>}
                </div>

                {/* BOTÓN EDITADO */}
                <button
                    type="submit"
                    className="
                  w-full
                  py-3
                  rounded-lg
                  font-semibold
                  transition-all
                  bg-[#FFD900]
                  text-[#29405A]
                  hover:bg-[#42CACA]
                  hover:text-[#FFD900]
                "
                >
                  ENVIAR
                </button>

              </form>
            </div>

            {/* CARD DE TEXTO CON MOVIMIENTO */}
            <div
                className="
              bg-[#29405A]
              rounded-2xl
              p-10
              text-white
              shadow-2xl
              flex
              flex-col
              justify-center
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:-translate-y-2
            "
            >
              <h3 className="text-3xl font-bold mb-4 text-center">
                ¿Tienes alguna duda?
              </h3>

              <p className="text-lg opacity-90 text-center mb-6">
                Estamos aquí para ayudarte y resolver todo lo que necesites.
              </p>

              <div className="text-center space-y-3 mt-4">
                <p className="text-xl font-semibold">📞 975 845 663</p>
                <p className="text-xl font-semibold">📧 alguiendijochamba@gmail.com</p>
              </div>

            </div>

          </div>
        </div>
      </section>
  );
}



