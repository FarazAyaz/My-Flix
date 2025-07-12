import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../components/ui/Card";

const Movies = () => {
  const MoviesData = useLoaderData();
  console.log(MoviesData);
  return (
    <div>
      <div className=" grid grid-cols-4 gap-4 p-20">
        {MoviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
