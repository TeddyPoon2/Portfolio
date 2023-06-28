import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  useParams,
} from "react-router-dom";
import Project from "./pages/Project.jsx";
import Skill from "./pages/Skill.jsx";
import Contact from "./pages/Contact.jsx";
import MainLayout from "./layout/MainLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<App />} />
      <Route path="skill" element={<Skill />} />
      <Route path="project" element={<Project />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
