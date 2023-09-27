import { useState, useRef, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const Carousel = () => {
  const videos = [
    {
      url: "assets/carousel/video_ojoxojo_2.mp4",
    },
    {
      url: "assets/carousel/video_ojoxojo_3.mp4",
    },
    {
      url: "assets/carousel/video_ojoxojo_1.mp4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.volume = 0; // Establecer el volumen en 0 al cargar el componente
    videoRef.current.play(); // Reproducir el video automáticamente al cargar el componente
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === videos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
      <video
        ref={videoRef}
        src={videos[currentIndex].url}
        autoPlay
        muted
        loop
        preload="auto"
        className="w-full h-full rounded-2xl duration-500"
      ></video>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowLeftIcon onClick={prevSlide} className="w-5" />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowRightIcon onClick={nextSlide} className="w-5" />
      </div>
      <div className="flex top-4 justify-center py-2">
        {videos.map((video, videoIndex) => (
          <div
            key={videoIndex}
            onClick={() => goToSlide(videoIndex)}
            className="text-2xl cursor-pointer"
          >
            <img
              src="icons/dot.svg"
              className="ml-1"
              alt="ojoxojo tattoos"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
