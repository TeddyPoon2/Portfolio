// import React from "react";
import { NavLink } from "react-router-dom";
import useSound from "use-sound";
import selectSfx from "../audio/00042_select.wav";
import "../css/navBar.css";

const Navbar = () => {
  const audioContext = new AudioContext();
  const [select] = useSound(selectSfx);

  const playsound = () => {
    if (audioContext.state !== "suspended") {
      select();
    }
  };

  return (
    <>
      <div className="navBar">
        <ul>
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
            <NavLink to="/Contact">Credit</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
