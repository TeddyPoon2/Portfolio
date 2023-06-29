import { NavLink } from "react-router-dom";
import useSound from "use-sound";
import selectSfx from "../audio/00042_select.wav";
import "../css/navBar.css";
import RandomPolygon from "./RandomPolygon";
import { useState } from "react";

const Navbar = () => {
  const audioContext = new AudioContext();
  const [select] = useSound(selectSfx);
  const [isActive1, setActive1] = useState("");
  const [isActive2, setActive2] = useState("");
  const [isActive3, setActive3] = useState("");
  const [isActive4, setActive4] = useState("");
  const [isActive5, setActive5] = useState("");

  const playsound = () => {
    if (audioContext.state !== "suspended") {
      select();
    }
  };

  return (
    <>
      <div className="navBar">
        <ul>
          <li onMouseOver={playsound} className={`home${isActive1}`}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? setActive1(" active") : setActive1("")
              }
            >
              Home
            </NavLink>
          </li>
          <li onMouseOver={playsound} className={`skill${isActive2}`}>
            <NavLink
              to="/Skill"
              className={({ isActive }) =>
                isActive ? setActive2(" active") : setActive2("")
              }
            >
              Skill
            </NavLink>
          </li>
          <li onMouseOver={playsound} className={`project${isActive3}`}>
            <NavLink
              to="/Project"
              className={({ isActive }) =>
                isActive ? setActive3(" active") : setActive3("")
              }
            >
              Project
            </NavLink>
          </li>
          <li onMouseOver={playsound} className={`contact${isActive4}`}>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? setActive4(" active") : setActive4("")
              }
            >
              Contact
            </NavLink>
          </li>
          <li onMouseOver={playsound} className={`credit${isActive5}`}>
            <NavLink
              to="/Credit"
              className={({ isActive }) =>
                isActive ? setActive5(" active") : setActive5("")
              }
            >
              Credit
            </NavLink>
          </li>
          <div className="indicator">
            <RandomPolygon />
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
