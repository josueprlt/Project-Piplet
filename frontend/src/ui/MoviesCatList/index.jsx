import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchByCategory } from "../../lib/loaders";
import PaysageCard from "../PaysageCard";

function PresentCat({ category }) {
  return (
    <section className="relative h-sizeSlider overflow-hidden">
      <img src={category.img} alt={"image de la categorie " + category.name} className="h-full w-full object-cover"/>
      <section className="absolute bottom-0 left-0 from-colorBgBody bg-gradient-to-t text-colorWhite">

        <div className="flex items-center text-center flex-col px-10 pb-5 md:pl-16 md:pr-80 md:items-start md:text-start md:pb-0">
          <h2 className="text-5xl font-bold pb-10">{category.name}</h2>
          <p className="text-2xl font-semibold pb-5 md:pb-16">{category.description}</p>
        </div>
      </section>
    </section>
  );
}

export default function MoviesCatList() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchByCategory(categoryId)
      .then((data) => {
        setCategory(data);
        setMovies(data.movies);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des films:", error)
      );
  }, [categoryId]);

  if (!category) {
    return <div className="text-white w-screen h-screen pt-20 text-center">Loading...</div>;
  }

  return (
    <div>
      <PresentCat category={category} />
      {movies && <PaysageCard movies={movies} />}
    </div>
  );
}

