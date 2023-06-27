// import React from "react";

const RandomPolygon = () => {
  return (
    <>
      <svg className="selector" viewBox="0 0 100 50" preserveAspectRatio="none">
        <polygon className="red" points="10,20 80,20 80,30, 20,30"></polygon>
        <polygon className="blue" points="30,10 90,30 100,35, 20,50"></polygon>
      </svg>
    </>
  );
};

export default RandomPolygon;
