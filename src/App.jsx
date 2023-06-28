import "./css/App.css";
import RandomPolygon from "./com/RandomPolygon";

function App({ interact }) {
  console.log(interact);

  return (
    <>
      <h1>Home Page{interact}</h1>
      <RandomPolygon />
    </>
  );
}

export default App;
