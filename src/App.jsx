import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Movies from './pages/Movies';
import AppLayout from './components/layout/AppLayout';
import ErrorPage from './pages/ErrorPage';
import GetApiData from './api/GetApiData';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
     {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie",
      element: <Movies/>,
      loader: GetApiData,
    },
    {
      path: "/about",
      element: <About />
    },
     {
      path: "/contact",
      element: <Contact/>
    },
  ]
    },
    
  ])
  return <RouterProvider router={router} />
}

export default App

