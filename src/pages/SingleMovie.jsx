import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();

  // Static Dummy Data
  const movie = {
    Title: "The Dark Knight",
    Year: "2008",
    Genre: "Action, Crime, Drama",
    Poster:
      "https://m.media-amazon.com/images/I/51k0qa9ntIL._AC_UF894,1000_QL80_.jpg",
    Plot:
      "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Director: "Christopher Nolan",
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    imdbRating: "9.0",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center py-10 px-4">
      <div className="bg-amber-800 p-6 rounded-3xl shadow-lg max-w-md w-full text-center">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-96 object-cover rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold mb-1">{movie.Title}</h2>
        <p className="text-sm text-gray-200 mb-2">
          {movie.Year} • {movie.Genre}
        </p>
        <p className="text-gray-100 text-sm mb-3">{movie.Plot}</p>
        <p className="text-sm">
          <span className="font-semibold">Director:</span> {movie.Director}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Actors:</span> {movie.Actors}
        </p>
        <p className="text-sm">
          <span className="font-semibold">IMDb Rating:</span> ⭐ {movie.imdbRating}
        </p>
      </div>

      <Link
        to="/"
        className="mt-6 inline-block bg-white text-black px-4 py-2 rounded-xl hover:bg-gray-200 transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default SingleMovie;
