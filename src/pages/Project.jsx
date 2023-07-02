import "../css/project.css";
import DialogueBubble from "../com/DialogueBubble";
import { useState } from "react";

const Project = () => {
  const defaultDialogue = "Some of my work during study in a bootcamp course.";
  const [dia, setDia] = useState(defaultDialogue);

  const handleMouseLeave = () => {
    setDia(defaultDialogue);
  };

  return (
    <>
      <div className="projectPage">
        <div className="showCaseContainer">
          <div className="showCase1 animate__animated animate__fadeInDownBig">
            <div className="showCaseBG1">
              <div className="mask1">
                <div className="showimg1"></div>
                <div
                  className="hoverLayer"
                  onMouseEnter={() => {
                    setDia(
                      "A group project using react in the bootcamp course period."
                    );
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="https://replit.com/@comehow/money"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code (replit)
                  </a>
                  <a
                    href="https://replit.com/@comehow/money"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="showCase2 animate__animated animate__fadeInUpBig">
            <div className="showCaseBG2">
              <div className="mask2">
                <div className="showimg2"></div>
                <div
                  className="hoverLayer"
                  onMouseEnter={() => {
                    setDia(
                      "A calculator app using react while I’m learning about useReducer."
                    );
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="https://github.com/TeddyPoon2/react-calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code (github)
                  </a>
                  <a
                    href="https://teddypoon2.github.io/react-calculator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="showCase3 animate__animated animate__fadeInDownBig">
            <div className="showCaseBG3">
              <div className="mask3">
                <div className="showimg3"></div>
                <div
                  className="hoverLayer"
                  onMouseEnter={() => {
                    setDia(
                      "A little tool to check KMB ETA while I'm learing about JS and DOM element."
                    );
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="https://github.com/TeddyPoon2/kmb-eta-chrome-extension"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code (github)
                  </a>
                  <a
                    href="https://chrome.google.com/webstore/detail/gfmaaoemhpolpfnpeglggicmnmppleah"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chrome Web Store
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="showCase4 animate__animated animate__fadeInUpBig">
            <div className="showCaseBG1">
              <div className="mask1">
                <div className="showimg4"></div>
                <div
                  className="hoverLayer"
                  onMouseEnter={() => {
                    setDia(
                      "A group project try using JS to create hangman in the bootcamp course period."
                    );
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="https://github.com/DOM-Exercise-3-Hangman/Hangman"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code (github)
                  </a>
                  <a
                    href="https://htmlpreview.github.io/?https://github.com/DOM-Exercise-3-Hangman/Hangman/blob/main/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="showCase5 animate__animated animate__fadeInDownBig">
            <div className="showCaseBG2">
              <div className="mask2">
                <div className="showimg5"></div>
                <div
                  className="hoverLayer"
                  onMouseEnter={() => {
                    setDia(
                      "A group project try to recreate a responsive website."
                    );
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href="https://replit.com/@TeddyPoon/iPortfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code (replit)
                  </a>
                  <a
                    href="https://replit.com/@TeddyPoon/iPortfolio"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogueBubble content={dia} />
    </>
  );
};

export default Project;
