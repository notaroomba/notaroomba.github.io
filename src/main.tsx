import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import "../index.css";
import SimpleFlightController from "./pages/SimpleFlightController.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Blog from "./pages/Blog.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import GalleryPage from "./pages/GalleryPage.tsx";

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
    path: "/blog",
    Component: Blog,
  },
  {
    path: "/blog/:slug",
    Component: BlogPost,
  },
  {
    path: "/gallery",
    Component: GalleryPage,
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
