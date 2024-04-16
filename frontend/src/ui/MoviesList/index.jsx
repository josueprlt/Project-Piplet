import React, { useState, useEffect } from "react";
import { fetchAllMovies } from "../../lib/loaders";
import PaysageCard from "../PaysageCard";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies()
      .then((data) => setMovies(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des films:", error),
      );
  }, []);

  if (!movies) {
    return <div className="text-white w-auto py-5 text-center">Loading...</div>;
  }

  return (
      <PaysageCard movies={movies}/>
  );
}
