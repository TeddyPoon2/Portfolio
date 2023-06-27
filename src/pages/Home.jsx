// import React from "react";
import { useOutletContext } from "react-router-dom";

const Home = () => {
  const isInteracted = useOutletContext();
  console.log(isInteracted);

  return (
    <div>
      <h1>Home Page{isInteracted}</h1>
    </div>
  );
};

export default Home;
