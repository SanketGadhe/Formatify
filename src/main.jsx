import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Landing from "./Component/Landing.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signup from "./Component/Signup.jsx";
import Format from "./Component/Format.jsx";


const route = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="Explore" element={<Landing/>} />
      <Route path="Customize" element={<Format />} />
      <Route path="Read" element={<Landing />} />
      <Route path="Learn" element={<Landing />} />
      <Route path="Contact" element={<Signup />} />
      <Route path="Signup" element={<Signup />} />
    </Route>,
  ])
);
ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={route}>

</RouterProvider>

);
