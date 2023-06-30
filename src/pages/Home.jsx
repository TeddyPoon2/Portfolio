import { useOutletContext } from "react-router-dom";
import "../css/home.css";
import DialogueBubble from "../com/DialogueBubble";
import homeBG from "../img/bg1.png";

const Home = () => {
  const [ref] = useOutletContext();

  return (
    <>
      <div className="homePage">
        <div className="container">
          <div className="homeBG">
            <h1 className="HomeTitle">About Me</h1>

            <img src={homeBG}></img>
          </div>
        </div>
      </div>
      <DialogueBubble />
    </>
  );
};

export default Home;
