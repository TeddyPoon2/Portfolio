import { useOutletContext } from "react-router-dom";
import "../css/home.css";
import DialogueBubble from "../com/DialogueBubble";
import homeBG from "../img/bg1.png";
import { useState } from "react";

const Home = () => {
  const [ref] = useOutletContext();
  const [dia, setDia] = useState("Let's talk about me.");

  const handleClick = () => {
    setDia("I'm also a gamer, an audiophile and an ACG lover.");
  };

  return (
    <>
      <div className="homePage">
        <div className="container animate__animated animate__backInUp animate__delay-30ms">
          <div className="aboutMeWrapper">
            <div className="homeBG">
              <h1 className="HomeTitle animate__animated animate__bounceInDown animate__delay-1s">
                About Me
              </h1>
              <img src={homeBG}></img>
            </div>
            <div className="aboutMe animate__animated animate__fadeInUp animate__delay-500ms">
              <h3>
                Hi, I'm Teddy Poon, a junior Front-End Developer located in Hong
                Kong. I have a serious passion for web developing, designing and
                programming.
              </h3>
              <h3>
                I'm enthusiastic in the entire frontend development field,
                aiming to deliver the best experience and attractive visual
                appearance to users.
              </h3>
            </div>
            <div className="logotoggle"></div>
            <div className="logo">
              <span className="logoLR">&lt; /&gt;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="homePageDia" onClick={handleClick}>
        <DialogueBubble content={dia} />
      </div>
    </>
  );
};

export default Home;
