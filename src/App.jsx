import "./css/App.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Project from "./pages/Project.jsx";
import Skill from "./pages/Skill.jsx";
import Contact from "./pages/Contact.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home";
import Credit from "./pages/Credit";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="skill" element={<Skill />} />
      <Route path="project" element={<Project />} />
      <Route path="contact" element={<Contact />} />
      <Route path="credit" element={<Credit />} />
    </Route>
  ),
  { basename: "/Portfolio" }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
