import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/ui/Card";

const Movies = () => {
  const MoviesData = useLoaderData();
  console.log(MoviesData);
  return (
    <div>
      <div className=" grid lg:grid-cols-4 gap-4 lg:p-20 md:grid-cols-2 md:pl-20 md:mt-10 sm:grid-cols-2   max-sm:grid-cols-2 ">
        {MoviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
