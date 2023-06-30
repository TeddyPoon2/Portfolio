import "../css/DialogueBubble.css";
import "animate.css";

const Bubble = () => {
  return (
    <div className="dialogueWrapper animate__animated animate__rotateInUpLeft">
      <div className="dialogueImg">
        <h1 className="name animate__animated animate__fadeIn">Teddy</h1>
        <h1 className="content animate__animated animate__fadeIn"></h1>
      </div>
    </div>
  );
};

export default Bubble;
