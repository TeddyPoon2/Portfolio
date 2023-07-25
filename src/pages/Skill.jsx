import { useState } from "react";
import "../css/skill.css";
import DialogueBubble from "../com/DialogueBubble";

const defaultDialogue =
  "What I've learned so far through bootcamp and myself, try hover those icon ;)";

//image url are useless now, deploying on github messed up the path
const logos = {
  html5: {
    url: "../src/img/html5.png",
    dialogue: "The bone of a website, I'm pretty familiar with it.",
  },
  css3: {
    url: "src/img/css.png",
    dialogue:
      "The look of a website, all the magic happens. It's good to see item aligned.",
  },
  js: {
    url: "src/img/js.png",
    dialogue:
      "The mechanism of a website, there are lots of libraries I'm planning to learn.",
  },
  bs: {
    url: "src/img/bs.png",
    dialogue:
      "Pretty good and easy to use framework, very beginner friendly. I like it.",
  },
  react: {
    url: "src/img/react.png",
    dialogue:
      "The most popular JS library for web development, still need to learn more.",
  },
  git: {
    url: "src/img/git.png",
    dialogue:
      "Version control system, an insurance of any developer. And me also :P",
  },
  java: {
    url: "src/img/java.png",
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
        <h1 className="skillTitle animate__animated animate__zoomInDown">
          New Skill
        </h1>
        <div className="skillBG animate__animated animate__fadeInRight">
          <div className="logoWrapper">
            <div className="html5Logo animate__animated animate__fadeInDown">
              <div
                className="html5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="css3Logo animate__animated animate__fadeInDown">
              <div
                className="css3"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="jsLogo animate__animated animate__fadeInDown">
              <div
                className="js"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="bsLogo animate__animated animate__fadeInDown">
              <div
                className="bs"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="reactLogo animate__animated animate__fadeInDown">
              <div
                className="react"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="gitLogo animate__animated animate__fadeInDown">
              <div
                className="git"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className="javaLogo animate__animated animate__fadeInDown">
              <div
                className="java"
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
