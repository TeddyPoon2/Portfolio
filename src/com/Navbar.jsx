import { NavLink } from "react-router-dom";
import useSound from "use-sound";
import selectSfx from "../audio/00042_select.wav";
import onSelectSfx from "../audio/00104_onSelect.wav";
import "../css/navBar.css";
import RandomPolygon from "./RandomPolygon";

const Navbar = () => {
  const audioContext = new AudioContext();
  const [select] = useSound(selectSfx);
  const [onSelect] = useSound(onSelectSfx);

  const playsound = () => {
    if (audioContext.state !== "suspended") {
      select();
    }
  };
  return (
    <>
      <div className="navBarWrapper">
        <nav>
          <NavLink
            to="/"
            className={"home"}
            onMouseOver={playsound}
            onClick={onSelect}
          >
            Home
          </NavLink>
          <NavLink
            to="/Skill"
            className={"skill"}
            onMouseOver={playsound}
            onClick={onSelect}
          >
            Skill
          </NavLink>
          <NavLink
            to="/Project"
            className={"project"}
            onMouseOver={playsound}
            onClick={onSelect}
          >
            Project
          </NavLink>
          <NavLink
            to="/Contact"
            className={"contact"}
            onMouseOver={playsound}
            onClick={onSelect}
          >
            Contact
          </NavLink>
          <NavLink
            to="/credit"
            className={"credit"}
            onMouseOver={playsound}
            onClick={onSelect}
          >
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
