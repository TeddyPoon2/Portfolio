import "../css/contact.css";
import DialogueBubble from "../com/DialogueBubble";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const Contact = () => {
  const defaultDialogue = "Feel free to contact me :)";
  const [dia, setDia] = useState(defaultDialogue);

  const handleMouseLeave = () => {
    setDia(defaultDialogue);
  };

  return (
    <>
      <div className="contactPage">
        <div className="phoneBG skillTitle animate__animated animate__rotateInUpLeft">
          <div className="phone" />
        </div>
        <div className="contactContainer">
          <div className="contactWrapper animate__animated animate__fadeInUp">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#ffffff" }}
              size={"3x"}
            />
            <a
              href="mailto:tatlamp@icloud.com"
              onMouseEnter={() => {
                setDia("Click to send email to me.");
              }}
              onMouseLeave={handleMouseLeave}
            >
              tatlamp@icloud.com
            </a>
          </div>
          <div className="contactWrapper animate__animated animate__fadeInUp">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#ffffff" }}
              size={"3x"}
            />
            <a
              href="https://www.linkedin.com/in/teddy-p/"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                setDia("Click to see my LinkedIn page.");
              }}
              onMouseLeave={handleMouseLeave}
            >
              LinkedIn
            </a>
          </div>
          <div className="contactWrapper animate__animated animate__fadeInUp">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ffffff" }}
              size={"3x"}
            />
            <a
              href="https://github.com/TeddyPoon2"
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => {
                setDia("Click to see my GitHub page");
              }}
              onMouseLeave={handleMouseLeave}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      <DialogueBubble content={dia} />
    </>
  );
};

export default Contact;
