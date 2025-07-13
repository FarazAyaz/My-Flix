import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact, { ContactData } from "./pages/Contact";
import Movies from "./pages/Movies";
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import GetApiData from "./api/GetApiData";
import MovieDetails from "./components/ui/MovieDetails";
import GetMoviesDetails from "./api/GetMoviesDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movie",
          element: <Movies />,
          loader: GetApiData,
        },
        {
          path: "/movie/:movieId",
          element: <MovieDetails />,
          loader: GetMoviesDetails,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
          action: ContactData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
