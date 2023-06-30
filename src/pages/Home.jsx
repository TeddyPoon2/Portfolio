import { useOutletContext } from "react-router-dom";
import "../css/home.css";
import DialogueBubble from "../com/DialogueBubble";

const Home = () => {
  const [ref] = useOutletContext();

  return (
    <>
      <div className="homePage">
        <h1 className="title">About Me</h1>
      </div>
      <DialogueBubble />
    </>
  );
};

export default Home;
