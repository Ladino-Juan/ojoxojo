import { useState } from "react";


const Formulario = () => {
  const initialFormData = {
    nombre: "Daniel Bedoya",
    parte: "",
    tamaño: "",
    telefono: "",
    imagen: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      imagen: file,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendTelegram = async () => {
    const chatbotUsername = import.meta.env.VITE_CHAT_ID;
    const { nombre, parte, tamaño, telefono, imagen } = formData;
    const API_KEY = import.meta.env.VITE_TELEGRAM_API_KEY;



    if (imagen) {
      // Send a photo if an image is selected
      const formData2 = new FormData();
      formData2.append("chat_id", chatbotUsername);
      formData2.append("photo", imagen);

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${API_KEY}/sendPhoto`,
          {
            method: "POST",
            body: formData2,
          }
        );
        const data = await response.json();
        console.log("Photo sent:", data);
      } catch (error) {
        console.error("Error sending photo:", error);
      }
    }

    if (nombre && parte && tamaño && telefono) {
      // Send a text message
      const message = `Hola! Me gustaría cotizar un tatuaje con ${nombre}\nparte del cuerpo: ${parte} con un tamaño de ${tamaño}cm \nmi numero de telefono es: ${telefono}`;

      try {
        const response = await fetch(
          `https://api.telegram.org/bot${API_KEY}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: chatbotUsername,
              text: message,
            }),
          }
        );
        const data = await response.json();
        setFormData(initialFormData);
        alert("Gracias por agendar tu cita. Pronto te contactaremos.")
        console.log("Text message sent:", data);
      } catch (error) {
        console.error("Error sending text message:", error);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendTelegram();
  };

  return (
    <div className="flex">
      <form className="p-6 flex flex-col font-libre" onSubmit={handleSubmit}>
        {/* Resto de tu formulario con los campos controlados */}
        <label htmlFor="nombre" className="mb-2 mt-2 text-base">
          Nombre del artista:
        </label>
        <select
          className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 text-gray"
          id="nombre"
          name="nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
        >
          <option value="Daniel Bedoya">Daniel Bedoya</option>
          <option value="Yojana Feria">Yojana Feria</option>
        </select>
        <label htmlFor="parte" className="mb-2 mt-2 text-base">
          Parte del cuerpo:
        </label>
        <input
          type="text"
          className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray"
          id="parte"
          name="parte"
          value={formData.parte}
          onChange={handleChange}
          required
        />

        <label htmlFor="tamaño" className="mb-2 mt-2 text-base">
          Tamaño aproximado en cm:
        </label>
        <input
          type="number"
          className="text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray"
          id="tamaño"
          name="tamaño"
          value={formData.tamaño}
          onChange={handleChange}
          required
        />
        <label htmlFor="telefono" className="mb-2 mt-2 text-base">
          Número de teléfono:
        </label>
        <input
          type="tel"
          className="text-sm mb-4 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          pattern="[0-9]{10}"
          required
        />

        <label htmlFor="imagen" className="mb-2 text-base">
          Imagen de referencia:
        </label>
        <input
          className="text-sm mb-4 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray"
          type="file"
          onChange={handleImageChange}
          id="imagen"
          name="imagen"
          accept="image/*"
        />

        <button
          type="submit"
          className="w-full p-2 text-base max-sm:text-sm font-semibold bg-gray-700 hover:bg-blanco text-blanco hover:text-black border border-gray-700 hover:border-transparent rounded-xl transition-all duration-700"
          aria-label="agendar cita ojoxojo studio"
        >
          <span className="py-2">AGENDAR</span>
        </button>
      </form>
      <div className="font-libre max-w-[50%] flex flex-col items-center justify-center max-lg:hidden">
        <h1 className="font-semibold text-4xl">AGENDA TU CITA</h1>
        <br></br>
        <p className="font-medium text-lg">
          Envíanos una imagen de referencia del diseño que tienes en mente, el
          área del cuerpo que deseas tatuar y el tamaño aproximado en
          centímetros. Con esta información, nuestro equipo de artistas expertos
          estará encantado de ponerse en contacto contigo y brindarte toda la
          información que necesitas.
        </p>
      </div>
    </div>
  );
};

export default Formulario;
