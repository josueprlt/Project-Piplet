import React, { useEffect, useState, createRef } from "react";
import { ArrowLeft, ArrowRight } from "../../components/icons";

export default function PaysageCard({ movies }) {
  const chunkSize = 5;
  const movieSections = [];

  for (let i = 0; i < movies.length; i += chunkSize) {
    movieSections.push(movies.slice(i, i + chunkSize));
  }

  const [containerRefs, setContainerRefs] = useState([]);
  const [scrollPositions, setScrollPositions] = useState([]);

  useEffect(() => {
    setContainerRefs((refs) => Array(movieSections.length).fill().map((_, i) => refs[i] || createRef()));
    setScrollPositions(Array(movieSections.length).fill(0));
  }, [movieSections.length]);

  const scrollLeft = (index) => {
    if (containerRefs[index].current) {
      const newScrollPositions = [...scrollPositions];
      newScrollPositions[index] = Math.max(newScrollPositions[index] - containerRefs[index].current.clientWidth, 0);
      setScrollPositions(newScrollPositions);
      containerRefs[index].current.scrollTo({
        left: newScrollPositions[index],
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = (index) => {
    if (containerRefs[index].current) {
      const newScrollPositions = [...scrollPositions];
      newScrollPositions[index] = Math.min(newScrollPositions[index] + containerRefs[index].current.clientWidth, containerRefs[index].current.scrollWidth - containerRefs[index].current.clientWidth);
      setScrollPositions(newScrollPositions);
      containerRefs[index].current.scrollTo({
        left: newScrollPositions[index],
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="h-auto">
      {movieSections.length > 0 && (
        movieSections.map((section, index) => (
          <div className="relative">
            <section
              ref={containerRefs[index]}
              className="m-0 px-5 md:m-10 md:mr-0 md:px-12 flex flex-nowrap items-center gap-4 h-96 overflow-x-auto"
            >
              {section.map((movie) => (
                <figure
                  key={movie.id}
                  className="group/card h-28 md:h-44 w-52 min-w-52 mdw-80 md:min-w-80 cursor-pointer overflow-hidden rounded-xl bg-colorBgBtnCate transition-transform delay-500 hover:h-auto hover:scale-125"
                  onClick={() => (window.location.href = `http://localhost:8090/film/${movie.id}`)}
                >
                  <section className="flex h-44 w-80 items-center justify-center overflow-hidden">
                    <img
                      className="w-full h-full duration-300 ease-in-out group-hover/card:scale-105 object-cover"
                      src={movie.img}
                      alt="Film"
                    />
                  </section>
                  <figcaption className="px-4 py-3 text-colorWhite">
                    <h3 className="font-bold text-lg">{movie.name}</h3>
                    <p className="text-sm">{movie.description.substring(0, 50)}...</p>
                  </figcaption>
                </figure>
              ))}
            </section>

            <button
              className="bg-colorBgBtnCate hover:bg-colorBorderBlue absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 transition-colors"
              onClick={() => scrollRight(index)}
            >
              <ArrowRight className="fill-colorWhite w-14" />
            </button>
            <button
              className="bg-colorBgBtnCate hover:bg-colorBorderBlue absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 transition-colors"
              onClick={() => scrollLeft(index)}
            >
              <ArrowLeft className="fill-colorWhite w-14" />
            </button>
          </div>
        ))
      )}
    </section>
  );
}