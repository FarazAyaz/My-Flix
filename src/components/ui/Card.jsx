import { NavLink } from "react-router-dom";

const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;
  return (
    <div className="bg-white rounded-lg shadow-md border-2 mb-16 w-[300px] sm:w-[230px] md:w-[250px] lg:w-[300px] max-sm:w-[160px] max-sm:h-[230px] max-sm:mt-10 mx-auto flex flex-col items-center justify-center relative overflow-hidden">
      {/* image */}
      <div className="shadow-2xl rounded-lg overflow-hidden w-full h-full flex justify-center items-center relative">
        <img
          src={Poster}
          alt={imdbID}
          className="w-full h-[350px] object-contain shadow-2xl px-4 rounded-lg md:mt-0 lg:mt-0 max-sm:h-[170px] max-sm:-mt-8 max-sm:px-2 max-sm:w-[200px] max-sm:rounded-xl max-sm:object-contain"
        />
      </div>
      {/* button */}
      <NavLink to={`/movie/${imdbID}`} className="w-full">
        <button className="w-full bg-gray-700 text-white text-center py-4 mt-10 max-w-full max-sm:mt-2 max-sm:bg-gray-500 transition-colors duration-300 font-bold  shadow-lg max-sm:text-sm max-sm:py-2 max-sm:w-full hover:bg-gray-600">
          Watch Now
        </button>
      </NavLink>
    </div>
  );
};

export default Card;
