import Gallery from "../components/Gallery";

const DanielGallery = () => {
  return (
    <>
      <div className="w-full h-[90vh] font-libre text-blanco flex flex-col justify-center items-center">
        <div className="relative text-center">
          <h1 className="font-semibold text-6xl max-sm:text-4xl">
            DANIEL BEDOYA
          </h1>
          <br></br>
          <p className="font-medium text-2xl max-sm:text-lg">
        Estudio profesional de tatuajes
          </p>
        </div>
        <img
          src="assets/daniel_background.jpg"
          className="object-cover max-sm:object-none w-full h-screen -z-10 absolute opacity-30"
          alt="Background Image"
        ></img>
      </div>
      <Gallery artista="daniel" />
    </>
  );
};

export default DanielGallery;
