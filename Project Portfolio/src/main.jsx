// Importing necessary modules from React
import React from "react";
import ReactDOM from "react-dom/client";
// Importing the main App component
import App from "./App.jsx";
// Importing necessary modules from React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Importing page components
import Error from "./pages/Error";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
// Creating a browser router with routes configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
        title: "About Me",
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
        title: "Portfolio",
      },
      {
        path: "/Resume",
        element: <Resume />,
        title: "Resume",
      },
      {
        path: "/Contact",
        element: <Contact />,
        title: "Contact",
      },
    ],
  },
]);
// Rendering the RouterProvider with the router configuration
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
