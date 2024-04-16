import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Play } from "../../components/icons";
import { fetchCarousel } from "../../lib/loaders";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  
  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % 6;
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
  };
  
  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + 6) % 6;
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
  };
  
  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  
  useEffect(() => {
    fetchCarousel()
      .then((data) => setMovies(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des films:", error),
      );
  }, []);

  if (!movies) {
    return <div className="text-white w-screen py-5 text-center">Loading...</div>;
  }
  
  return (
    <>
      <div className="relative h-sizeSlider overflow-hidden">
        <div className="flex">
          {movies.map((movie, index) => (
            <div
              id={movie.id}
              key={index}
              className={`slide absolute left-0 top-0 h-full w-full transition-opacity duration-500 ${
                index === currentIndex || index === prevIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <img src={movie.img} alt={movie.name} className="h-full w-screen object-cover"/>

              <section className="from-colorBgBody absolute bottom-0 w-full px-10 bg-gradient-to-t">
                <figure className="flex flex-col text-center items-center mb-10 md:mb-28 text-colorWhite">
                  <figcaption>
                    <h2 className="text-3xl md:text-5xl font-bold pb-2">{movie.name}</h2>
                    <p className="text-lg md:text-2xl font-semibold pb-5">{movie.description.substring(0, 50)}...</p>
                  </figcaption>

                  <button
                    id={movie.id}
                    className="bg-colorBgBtn hover:bg-colorBgBtnHover flex items-center justify-center gap-3 rounded-full px-5 py-2"
                    onClick={() => window.location.href = "http://localhost:8090/film/"+ movie.id}
                    >
                    <Play className="fill-colorWhite w-3" />
                    <span className="text-lg font-semibold">Visionner</span>
                  </button>
                </figure>
              </section>
            </div>
          ))}
        </div>

        <button
          className="bg-colorBgBtnCate hover:bg-colorBorderBlue absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 transition-colors"
          onClick={goToPrevSlide}
        >
          <ArrowLeft className="fill-colorWhite w-10 md:w-14" />
        </button>
        <button
          className="bg-colorBgBtnCate hover:bg-colorBorderBlue absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 transition-colors"
          onClick={goToNextSlide}
        >
          <ArrowRight className="fill-colorWhite w-10 md:w-14" />
        </button>
      </div>
    </>
  );
}
