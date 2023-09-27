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
            Tu cuerpo es un lienzo en blanco, ¡pinta tu historia en él con tinta
            eterna!
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          className="object-cover max-sm:object-none w-full h-[90vh] -z-10 absolute opacity-40"
        >
          <source src="assets/daniel_video_bg.mp4" type="video/mp4" />
          {/* También puedes proporcionar otros formatos de video aquí, como WebM o Ogg */}
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>
      <Gallery artista="daniel" />
    </>
  );
};

export default DanielGallery;
