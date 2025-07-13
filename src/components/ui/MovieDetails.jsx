import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const moviedata = useLoaderData();
  const [showDetails, setShowDetails] = useState(false);
  const {
    Actor,
    Poster,
    Title,
    Runtime,
    Genre,
    Type,
    Year,
    Plot,
    BoxOffice,
    Awards,
    imdbRating,
  } = moviedata;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-100 to-gray-300 py-10 px-2">
      <div className="bg-white rounded-2xl shadow-2xl border-2 w-full max-w-md p-6 flex flex-col items-center">
        <img
          src={Poster}
          alt={Title}
          className="w-60 h-80 object-cover rounded-xl shadow-lg border-4 border-pink-400 mb-4"
        />
        <h1 className="text-3xl font-extrabold text-center text-pink-600 mb-2 drop-shadow-lg">
          {Title}
        </h1>
        <button
          onClick={() => setShowDetails((prev) => !prev)}
          className="mt-4 px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transition duration-300 text-lg focus:outline-none"
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden w-full ${
            showDetails
              ? "max-h-[1000px] opacity-100 mt-6"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <p className="text-gray-700 text-center font-bold">
            YEAR OF RELEASE: <span className="text-gray-900">{Year}</span>
          </p>
          <p className="text-gray-700 text-center font-bold">
            DURATION: <span className="text-gray-900">{Runtime}</span>
          </p>
          <p className="text-gray-700 text-center font-bold">
            GENRE: <span className="text-gray-900">{Genre}</span>
          </p>
          <p className="text-gray-700 text-center font-bold">
            TYPE: <span className="text-gray-900">{Type}</span>
          </p>
          <p className="text-gray-700 text-center font-bold">
            PLOT: <span className="text-gray-900">{Plot}</span>
          </p>
          <p className="text-gray-700 text-center font-bold">
            Box Office:{" "}
            <span className="text-gray-900">
              {BoxOffice ? BoxOffice : "N/A"}
            </span>
          </p>
          <p className="text-gray-700 text-center font-bold">
            Awards:{" "}
            <span className="text-gray-900">{Awards ? Awards : "N/A"}</span>
          </p>
          <p className="text-gray-700 text-center font-bold">
            IMDb Rating:{" "}
            <span className="text-gray-900">
              {imdbRating ? imdbRating : "N/A"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
