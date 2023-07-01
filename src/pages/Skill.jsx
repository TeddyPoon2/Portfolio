import { useState } from "react";
import "../css/skill.css";
import DialogueBubble from "../com/DialogueBubble";

const defaultDialogue = "What I've learned so far, try hover those icon ;)";

const logos = {
  html5: {
    url: "src/logo/html5.png",
    dialogue: "The bone of a website, I'm pretty familiar with it.",
  },
  css3: {
    url: "src/logo/css.png",
    dialogue:
      "The look of a website, all the magic happens. It's good to see item aligned.",
  },
  js: {
    url: "src/logo/js.png",
    dialogue:
      "The mechanism of a website, there are lots of libraries I'm planning to learn.",
  },
  bs: {
    url: "src/logo/bs.png",
    dialogue:
      "Pretty good and easy to use framework, very beginner friendly. I like it.",
  },
  react: {
    url: "src/logo/react.png",
    dialogue: "Thank you facebook, you saved my life. And many of us.",
  },
  git: {
    url: "src/logo/git.png",
    dialogue:
      "Version control system, an insurance of any developer. And me also :P",
  },
  java: {
    url: "src/logo/java.png",
    dialogue: "I learn a little bit of it, planning to learn more later on.",
  },
};

const Skill = () => {
  const [dia, setDia] = useState(defaultDialogue);

  const handleMouseEnter = (el) => {
    setDia(logos[el.target.className].dialogue);
  };

  const handleMouseLeave = () => {
    setDia(defaultDialogue);
  };

  return (
    <>
      <div className="skillPage">
        <div className="skillBG animate__animated animate__fadeInRight">
          <div className="logoWrapper">
            <div className="html5Logo animate__animated animate__fadeInDown animate__delay-1000ms">
              <img
                className="html5"
                src={logos.html5.url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="css3Logo animate__animated animate__fadeInDown">
              <img
                className="css3"
                src={logos.css3.url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="jsLogo animate__animated animate__fadeInDown">
              <img
                className="js"
                src={logos.js.url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="bsLogo animate__animated animate__fadeInDown">
              <img
                className="bs"
                src={logos.bs.url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="reactLogo animate__animated animate__fadeInDown">
              <img
                className="react"
                src={logos.react.url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="gitLogo animate__animated animate__fadeInDown">
              <img
                className="git"
                src={logos.git.url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="javaLogo animate__animated animate__fadeInDown">
              <img
                className="java"
                src={logos.java.url}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
          </div>
        </div>
      </div>
      <DialogueBubble content={dia} />
    </>
  );
};

export default Skill;
