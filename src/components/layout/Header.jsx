import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <section>
        <div className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white lg:px-24 md:px-24 sm:px-5 px-4  relative">
          <h1 className="text-2xl font-bold ">FarazFlix</h1>
          {/* Hamburger menu for mobile */}
          <div className="absolute top-4 right-4 md:static md:top-auto md:right-auto flex items-center">
            <button
              className="md:hidden flex flex-col justify-center items-center z-30 p-0 m-0 h-8 w-8 bg-transparent border-none outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              style={{ boxShadow: "none" }}
            >
              <span
                className={`block w-7 h-1 bg-white rounded transition-all duration-300 mb-1 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-white rounded transition-all duration-300 mb-1 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
          <nav>
            <ul
              className={`flex md:flex-row flex-col md:space-x-4 space-y-3 md:space-y-0 md:static md:items-center md:justify-end absolute md:relative top-16 right-4 md:top-0 md:right-0  md:w-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 md:bg-none z-30 rounded-xl md:rounded-none shadow-lg md:shadow-none transition-all duration-300 overflow-hidden ${
                menuOpen
                  ? "max-h-96 py-4 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible md:visible md:opacity-100 md:max-h-full"
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 hover:shadow-lg ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/movie"
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 hover:shadow-lg ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 hover:shadow-lg ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white hover:text-gray-800 hover:shadow-lg ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "bg-gradient-to-r from-green-500 to-lime-500 text-white"
                    }`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
