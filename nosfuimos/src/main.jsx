import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registros from "./componentes/layouts/pagina registro/Registros.jsx";
import Pagina from "./componentes/layouts/pagina principal/Pagina.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/registros",
    element: <Registros/>
  },
  {
    path: "/pagina",
    element: <Pagina/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
