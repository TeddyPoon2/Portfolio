import { NavLink } from "react-router-dom";
import useSound from "use-sound";
import selectSfx from "../audio/00042_select.wav";
import "../css/navBar.css";
import RandomPolygon from "./RandomPolygon";

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
        <nav>
          <NavLink to="/" className={"home"} onMouseOver={playsound}>
            Home
          </NavLink>
          <NavLink to="/Skill" className={"skill"} onMouseOver={playsound}>
            Skill
          </NavLink>
          <NavLink to="/Project" className={"project"} onMouseOver={playsound}>
            Project
          </NavLink>
          <NavLink to="/Contact" className={"contact"} onMouseOver={playsound}>
            Contact
          </NavLink>
          <NavLink to="/credit" className={"credit"} onMouseOver={playsound}>
            Credit
          </NavLink>
          <div className="indicator">
            <RandomPolygon />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
