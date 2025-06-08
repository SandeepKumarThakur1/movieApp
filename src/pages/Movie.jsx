import React from "react";
import { useGlobalAppContext } from "../context/context";
import { NavLink } from "react-router-dom";

const Movie = () => {
  const { movie, isLoading, isError } = useGlobalAppContext();

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError.show)
    return <p className="text-center text-red-500 py-10">{isError.msg}</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movie.map((curElem) => (
        <NavLink to={`movie/${curElem.imdbID}`} key={curElem.imdbID}>
          <div className="p-4 bg-[#ffffff14] shadow-lg rounded-3xl hover:scale-[1.02] transition-transform duration-300">
            <img
              src={
                curElem.Poster !== "N/A" ? curElem.Poster : "Image Is Not Found"
              }
              alt={curElem.Title}
              className="w-full h-60 object-cover rounded-2xl mb-3"
            />
            <h2 className="text-lg font-semibold text-white truncate">
              {curElem.Title}
            </h2>
            <p className="text-sm text-gray-300">{curElem.Year}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Movie;
