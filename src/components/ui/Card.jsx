import { NavLink } from "react-router-dom";

const Card = ({ curMovie }) => {
  const { Poster, imdbID } = curMovie;
  return (
    <div className="bg-white rounded-lg shadow-md border-2 mb-16 w-[300px]">
      {/* image */}
    
        <img
          src={Poster}
          alt={imdbID}
          className="w-full h-[350px] object-cover shadow-2xl px-4 mt-[-10%] rounded-lg"
        />
 
      {/* button */}
      <NavLink to={`/movie/${imdbID}`}>
       <button className="w-full bg-black text-white text-center py-4 mt-10">
        Watch Now
      </button>
      </NavLink>
     
    </div>
  );
};

export default Card;
