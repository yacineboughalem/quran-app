import React from "react";
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./screens/Home";
import Surah from "./screens/Surah";
import Explain from "./screens/Explain";
import Results from "./screens/Results";

import GlobalLayout from "./shared/components/Layout";

export function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/surah" element={<Surah />} />
        <Route path="/explain" element={<Explain />} />
        <Route path="/results" element={<Results />} />
      </Route>
    )
  );
  return (
    <GlobalLayout>
      <RouterProvider router={router} />
    </GlobalLayout>
  );
}

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
