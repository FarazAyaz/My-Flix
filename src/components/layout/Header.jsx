import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-500 to-gray-800 text-white px-24 mx-10 mt-4  rounded-full">
          <h1 className="text-2xl font-bold">FarazFlix</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-4 py-2 rounded-lg ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    } hover:bg-white hover:text-gray-800 hover:shadow-lg`
                  }
                >
                  Home
                </NavLink>
              </li>
               <li>
                <NavLink
                  to="/movie"
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-4 py-2 rounded-lg ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
                    } hover:bg-white hover:text-gray-800 hover:shadow-lg`
                  }
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-4 py-2 rounded-lg ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                    } hover:bg-white hover:text-gray-800 hover:shadow-lg`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `transition-colors duration-300 px-4 py-2 rounded-lg ${
                      isActive
                        ? "bg-white text-gray-800 shadow-lg"
                        : "bg-gradient-to-r from-green-500 to-lime-500 text-white"
                    } hover:bg-white hover:text-gray-800 hover:shadow-lg`
                  }
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
