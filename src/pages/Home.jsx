import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-6 py-12">
      <div className="flex-1 flex flex-col items-start justify-center text-white space-y-6 max-w-xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg ml-[20%]">
          Welcome to <span className="text-pink-500">FarazFlix</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200v ml-[20%]">
          Discover, search, and enjoy your favorite movies with a modern and
          beautiful interface. Dive into the world of cinema with us!
        </p>
        <NavLink
          to="/movie"
          className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transition duration-300 text-xl ml-[20%] mt-4"
        >
          Explore Movies
        </NavLink>
      </div>
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        <img
          src="/movies.png"
          alt="Movies"
          className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-pink-500"
        />
      </div>
    </section>
  );
};

export default Home;
