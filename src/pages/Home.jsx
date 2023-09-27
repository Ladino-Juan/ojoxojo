import { ArrowRightIcon } from "@heroicons/react/outline";
import { ElfsightWidget } from "react-elfsight-widget";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/daniel_bedoya");
  };

  const sendWhatsApp = () => {
    const phonenumber = "+573205279852";

    const url = `https://wa.me/${phonenumber}?text=Para obtener tu cotización y tu cita envianos una imagen de referencia del diseño que quieres, una foto del lugar de tu cuerpo que deseas tatuar y tamaño aproximado en cm y te damos toda la información`;

    window.open(url, "_blank").focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendWhatsApp();
  };

  return (
    <>
      <div className="w-full h-screen font-libre text-blanco flex flex-col justify-center items-center">
        <div className="relative text-center">
          <h1 className="font-semibold text-6xl max-sm:text-4xl">
            OJOXOJO STUDIO
          </h1>
          <br></br>
          <p className="font-medium text-2xl max-sm:text-lg">
            Creatividad y excelencia, artistas expertos en hacer tus ideas realidad
          </p>
          <div>
            <div className="w-full flex justify-center mt-9">
              <button
                onClick={handleSubmit}
                className="flex items-center justify-center w-56 text-xl max-sm:text-lg font-semibold bg-amarillo hover:bg-blanco text-black hover:text-black border border-amarillo hover:border-transparent rounded-xl transition-all duration-700"
                aria-label="agendar cita ojoxojo studio"
              >
                <span className="py-2">AGENDAR CITA</span>
                <ArrowRightIcon className="w-6 ml-3" />
              </button>
            </div>
          </div>
        </div>
        <img
          src="assets/ojoxojo_bg.webp"
          className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-40"
          alt="Background Image"
        ></img>
      </div>
      <div className="w-full h-screen font-libre text-blanco flex flex-col justify-center items-center">
        <div className="relative text-center">
          <h1 className="font-semibold text-6xl max-sm:text-4xl">
            DANIEL BEDOYA
          </h1>
          <br></br>
          <p className="font-medium text-2xl max-sm:text-lg">
            Transforma tus ideas en tatuajes excepcionales y memorables
          </p>
          <div className="w-full flex justify-center mt-9">
            <button
              onClick={handleClick}
              className="flex items-center justify-center w-56 text-xl max-sm:text-lg font-semibold bg-blanco hover:bg-black text-black hover:text-blanco rounded-xl transition-all duration-700"
              aria-label="galeria de tatuajes Daniel Bedoya"
            >
              <span className="py-2">GALERIA</span>
              <ArrowRightIcon className="w-6 ml-3" />
            </button>
          </div>
        </div>
        <img
          src="assets/danielbedoyabg.webp"
          className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-40 grayscale"
          alt="Daniel Bedoya Background Image"
        ></img>
      </div>

      <div className="w-full overflow-hidden">
        <ElfsightWidget widgetId="7777a374-a3d3-4cac-9d46-a657e3292eb2" lazy />
      </div>
      <div
        className="w-full h-[120vh] flex justify-center items-center max-sm:flex-col max-sm:h-[150vh]"
        id="patrocinadores"
      >
        <Carousel />
        <div className="font-libre text-blanco mr-20 max-sm:mx-2 max-sm:text-center">
          <h1 className="font-semibold text-6xl max-sm:text-4xl">
            Nuestros patrocinadores
          </h1>
          <br></br>
          <p className="font-medium text-2xl max-sm:text-lg">
            Gracias por ser parte de la familia de OJOXOJO. Estamos ansiosos por
            seguir creciendo juntos y por continuar haciendo del arte del tatuaje una experiencia verdaderamente excepcional.
          </p>
          <div className="flex max-sm:items-center max-sm:flex-col">
            <a
              href="https://www.radiantcolors.com/"
              aria-label="radiant colors web page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-40 mt-8"
                src="assets/logoRadiant.webp"
                alt="radiant colors logo"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/aincradco/"
              aria-label="Aincrad Colombia instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-40"
                src="assets/logoAincrad.webp"
                alt="Aincrad logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
