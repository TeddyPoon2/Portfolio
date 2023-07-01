import "../css/DialogueBubble.css";
import "animate.css";

const Bubble = ({ content }) => {
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
        <h1 className="content animate__animated animate__fadeIn">{content}</h1>
      </div>
    </div>
  );
};

export default Bubble;
