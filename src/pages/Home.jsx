// import React from "react";
import { useOutletContext } from "react-router-dom";
import RandomPolygon from "../com/RandomPolygon.jsx";

const Home = () => {
  const isInteracted = useOutletContext();
  console.log(isInteracted);

  return (
    <div>
      <h1>Home Page{isInteracted}</h1>
      <RandomPolygon />
    </div>
  );
};

export default Home;
