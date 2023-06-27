import Navbar from "../com/Navbar";
import { Outlet } from "react-router-dom";
import Bgm from "../com/Bgm.jsx";

// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  return (
    <>
      <div className="bg"></div>
      <Navbar />
      <Outlet />
      <Bgm />
    </>
  );
};

export default MainLayout;
