import "../css/DialogueBubble.css";
import "animate.css";
import { useState, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";

// trying typewriter effect
const Bubble = ({ content }) => {
  // const [display] = useTypewriter({
  //   words: [content],
  //   loop: 0,
  // });
  // // animate__animated animate__fadeIn
  // const [dialogue, setDialogue] = useState("");
  // const [display, setDisplay] = useState("");
  // const [index, setIndex] = useState(0);
  // let timer;

  // const typeWriter = (content) => {
  //   let i = -1;
  //   let speed = 18;
  //   timer = setInterval(() => {
  //     i++;
  //     if (i === content.length - 1) {
  //       clearInterval(timer);
  //     }
  //     setDialogue((prev) => prev + content[i]);
  //   }, speed);
  // };

  // useEffect(() => {
  //   clearInterval(timer);
  //   // setDialogue("");
  //   typeWriter(content);
  // }, [content]);

  // useEffect(() => {
  //   if (index < dialogue.length) {
  //     setTimeout(() => {
  //       setDisplay(display + dialogue[index]);
  //       setIndex(index + 1);
  //     }, 40);
  //   }
  // }, [dialogue]);

  return (
    <div className="dialogueWrapper animate__animated animate__rotateInUpLeft">
      <div className="dialogueImg">
        <h1 className="name animate__animated animate__fadeIn">
          <div className="namewrapper">
            <span className="Tddy">
              T<span className="e">e</span>
              ddy
            </span>
          </div>
        </h1>
        <h1 className="content">{content}</h1>
      </div>
    </div>
  );
};

export default Bubble;
