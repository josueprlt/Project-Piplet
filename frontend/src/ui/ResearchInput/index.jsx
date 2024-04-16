import React, { useState, useEffect } from "react";
import { Research } from "../../components/icons";
import PaysageCard from "../PaysageCard";
import { fetchResearch } from "../../lib/loaders";

function ResearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchResearch(inputValue);
        setData(result);
      } catch (error) {
        console.error("Erreur lors de la récupération des films:", error);
      }
    };

    if (inputValue) {
      fetchData();
    }
  }, [inputValue]);

  return (
    <>
      <section className="flex w-full justify-center py-32">
        <div className="relative w-96">
          <Research className="absolute w-10 fill-colorWhite" />
          <input
            type="text"
            placeholder="Rechercher un film, une série"
            className="w-full rounded border border-gray-300 bg-gray-700 p-2 pl-16 text-white focus:border-blue-500"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </section>

      <PaysageCard movies={data} />
    </>
  );
}

export default ResearchInput;