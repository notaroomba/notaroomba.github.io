import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import "../index.css";
const SimpleFlightController = lazy(() => import("./pages/SimpleFlightController.tsx"));
import ErrorPage from "./pages/ErrorPage.tsx";
const Blog = lazy(() => import("./pages/Blog.tsx"));
const BlogPost = lazy(() => import("./pages/BlogPost.tsx"));
const GalleryPage = lazy(() => import("./pages/GalleryPage.tsx"));

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
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
