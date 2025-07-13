import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 px-6 py-12">
      <div className="flex-1 flex flex-col items-start justify-center text-white space-y-6 max-w-xl ml-[15%]">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg mb-4">
          About <span className="text-pink-500">FarazFlix</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200">
          FarazFlix is your ultimate destination for discovering, searching, and
          enjoying your favorite movies. Our mission is to bring the magic of
          cinema to your fingertips with a beautiful, modern, and user-friendly
          interface.
        </p>
        <ul className="list-disc pl-6 text-gray-300 text-lg space-y-2">
          <li>Browse trending and classic movies</li>
          <li>Get detailed information and ratings</li>
          <li>Enjoy a seamless and responsive experience</li>
          <li>Contact us anytime for support or suggestions</li>
        </ul>
        <div className="mt-6">
          <a
            href="/movie"
            className="inline-block px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transition duration-300 text-xl"
          >
            Explore Movies
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center mt-10 md:mt-0">
        <img
          src="/movies.png"
          alt="About FarazFlix"
          className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-pink-500"
        />
      </div>
    </section>
  );
};

export default About;
