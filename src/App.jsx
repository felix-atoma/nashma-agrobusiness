import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';

// Importing Layout and Pages
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';         // Adjust path
import Services from './pages/Services'; // Adjust path
import Contact from './pages/Contact';   // Adjust path

function App() {
  // Define the routes with RootLayout wrapping all pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />, // Blog route
        },
        {
          path: "/services",
          element: <Services />, // Services route
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
