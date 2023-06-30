import { useOutletContext } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const [ref] = useOutletContext();

  return (
    <div className="homePage">
      <h1 className="title">About Me</h1>
    </div>
  );
};

export default Home;
