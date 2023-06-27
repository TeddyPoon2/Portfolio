// import React from "react";
import { NavLink } from "react-router-dom";
import useSound from "use-sound";
import selectSfx from "../audio/00042_select.wav";
import "../css/navBar.css";

const Navbar = () => {
  const [select] = useSound(selectSfx);

  const playsound = () => {
    try {
      select();
    } catch (e) {
      console.log("error");
    }
  };

  return (
    <>
      <svg className="selector" viewBox="0 0 100 50" preserveAspectRatio="none">
        <polygon className="red" points="10,20 80,20 80,30, 20,30"></polygon>
        <polygon className="blue" points="30,10 90,30 100,35, 20,50"></polygon>
      </svg>
      <div className="navBar">
        <ul>
          {/* <div className="wrapper">
          </div> */}
          <li onMouseOver={playsound}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onMouseOver={playsound}>
            <NavLink to="/Skill">Skill</NavLink>
          </li>
          <li onMouseOver={playsound}>
            <NavLink to="/Project">Project</NavLink>
          </li>
          <li onMouseOver={playsound}>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
          <li onMouseOver={playsound}>
            <NavLink to="/Content">Credit</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
