import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import "../index.css";
import SimpleFlightController from "./pages/SimpleFlightController.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/simpleflightcontroller",
    Component: SimpleFlightController,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
