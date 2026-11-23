import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import "../index.css";
const SimpleFlightController = lazy(() => import("./pages/SimpleFlightController.tsx"));
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
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
