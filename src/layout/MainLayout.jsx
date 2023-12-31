import Navbar from "../com/Navbar";
import { Outlet } from "react-router-dom";
import Bgm from "../com/Bgm.jsx";
import { useState, useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
const MainLayout = () => {
  const [isInteracted, setInteract] = useState(0);
  const ref = useRef(isInteracted);

  useEffect(() => {
    const handleClick = (e) => {
      // e.preventDefault();
      setInteract((prev) => prev + 1);
      ref.current += 1;
    };
    document.addEventListener("click", handleClick);
  }, [ref]);

  return (
    <>
      <div className="bg"></div>
      <div className="header">
        <Navbar />
      </div>
      <Outlet context={[ref]} />
      {/* <DialogueBubble /> */}
      <Bgm isInteracted={ref} />
    </>
  );
};

export default MainLayout;
