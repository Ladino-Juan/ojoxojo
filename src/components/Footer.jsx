const Footer = () => {
  return (
    <div className="w-full h-[30vh] max-sm:h-[40vh] flex max-sm:flex-col items-center justify-around font-libre" id="contacto">
      <div className="flex flex-col items-center justify-center">
        <img
        className="w-10"
          src="assets/ojoxojo_logo_white.webp"
          alt="ojoxojo tattoo studio logo"
        ></img>
        <br></br>
        <h2 className="text-blanco">OJO X OJO, Pereira, Risaralda</h2>
        <h2 className="text-blanco">¿Deseas ser patrocinador/a? Escribenos.... </h2>
        <a href="https://maps.app.goo.gl/fNddQurJ2KaUjjJV7"
          aria-label="ojoxojo tattoo studio mapa"
          target="_blank"
          rel="noopener noreferrer"><h3 className="underline text-blue-600">Ver mapa</h3></a>
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?l=es&phone=573128398126"
          aria-label="Whatsapp ojoxojo tattoo studio"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <img
            src="icons/whatsapp-icon.svg"
            alt="Whatsapp ojoxojo tattoo studio"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/danielbedoyaart/"
          aria-label="Instagram Daniel ojoxojo tattoo studio"
          target="_blank"
          className="mr-2"
          rel="noopener noreferrer"
        >
          <img
            src="icons/instagram-icon.svg"
            alt="Instagram ojoxojo tattoo studio"
          ></img>
        </a>

        <a href="https://davidladino.netlify.app/"
          aria-label="David Ladino Portfolio"
          target="_blank"
          className="text-blanco text-center absolute mt-10"
          rel="noopener noreferrer">Developed by David Ladino</a>
      </div>
    </div>
  );
};

export default Footer;
