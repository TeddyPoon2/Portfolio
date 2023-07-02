import "../css/contact.css";
import DialogueBubble from "../com/DialogueBubble";

const Contact = () => {
  return (
    <>
      <div className="contactPage">
        <div className="phoneBG skillTitle animate__animated animate__rotateInUpLeft">
          <img className="phone" src="src/img/sns_1250px.png"></img>
          <div className="contactContainer">
            <div className="contactWrapper animate__animated animate__fadeInUp">
              <span>icon</span>
              <a href="#">tatlamp@hotmail.com</a>
            </div>
            <div className="contactWrapper animate__animated animate__fadeInUp">
              <span>icon</span>
              <a href="#">xxxxx@gmail.com</a>
            </div>
            <div className="contactWrapper animate__animated animate__fadeInUp">
              <span>icon</span>
              <a href="#">xxxx@gmail.com</a>
            </div>
            <div className="contactWrapper animate__animated animate__fadeInUp">
              <span>icon</span>
              <a href="#">xxxx@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <DialogueBubble />
    </>
  );
};

export default Contact;
