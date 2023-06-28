import RandomPolygon from "../com/RandomPolygon.jsx";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const [ref] = useOutletContext();

  return (
    <div>
      <h1>Home Page {ref.current}</h1>
      <RandomPolygon />
    </div>
  );
};

export default Home;
