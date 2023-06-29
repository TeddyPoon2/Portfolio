import { useOutletContext } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  const [ref] = useOutletContext();

  return (
    <div>
      <h1>Home Page {ref.current}</h1>
    </div>
  );
};

export default Home;
