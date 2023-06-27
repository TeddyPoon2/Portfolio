import Navbar from "../com/Navbar";
import { Outlet } from "react-router-dom";
import Bgm from "../com/Bgm.jsx";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  const [isInteracted, setInteract] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setInteract((prev) => prev + 1);
    };
    document.addEventListener("click", handleClick);
  }, []);

  return (
    <>
      <div className="bg"></div>
      <Navbar />
      <Outlet context={isInteracted} />
      <Bgm isInteracted={isInteracted} />
    </>
  );
};

export default MainLayout;
