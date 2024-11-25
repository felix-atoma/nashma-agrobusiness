import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';

// Importing Layout and Pages
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project'
import Contact from './pages/Contact';        // Adjust path

function App() {
  // Define the routes with RootLayout wrapping all pages
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Project />,
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