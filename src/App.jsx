import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Movies from './pages/Movies';
import AppLayout from './components/layout/AppLayout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
     {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/movie",
      element: <Movies/>
    }]
    },
    
  ])
  return <RouterProvider router={router} />
}

export default App

