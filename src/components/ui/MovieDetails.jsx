import React from 'react'
import { useLoaderData } from 'react-router-dom';

const MovieDetails = () => {
  const moviedata = useLoaderData();
  console.log(moviedata);
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
    <div className="bg-white rounded-lg shadow-md border-2 mb-16 w-[300px] p-2 mt-10 mx-auto">
       <img src={Poster} alt="titanic" />
      <h1 className="text-2xl font-bold text-center mt-2">{Title}</h1>
      <p className="text-gray-600 text-center font-bold">YEAR OF RELEASE :{Year}</p>
      <p className="text-gray-600 text-center  font-bold"> DURATION : {Runtime}</p>
      <p className="text-gray-600 text-center font-bold">GENRE : {Genre}</p>
      <p className="text-gray-600 text-center font-bold"> TYPE : {Type}</p>
      <p className="text-gray-600 text-center font-bold">PLOT : {Plot}</p>
      <p className="text-gray-600 text-center font-bold">Box Office: {BoxOffice
        ? BoxOffice
        : 'N/A'}</p>
      <p className="text-gray-600 text-center font-bold">Awards: {Awards ? Awards : 'N/A'}</p>
      <p className="text-gray-600 text-center font-bold">IMDb Rating: {imdbRating ? imdbRating : 'N/A'}</p>

    </div>
  )
}

export default MovieDetails
