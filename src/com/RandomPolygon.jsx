import Snap from "snapsvg-cjs";
import { useEffect, useRef } from "react";

// Settings

const svgWidth = 100; // must match viewBox in HTML
const svgHeight = 50;
const animationSpeed = 120; // speed in ms

// 0 = go to edge
// higher = points stay further from edge
// max: width/2 or height/2
const horizontalEdgePadding = 0;
const verticalEdgePadding = 0;

// higher = points stay further from center
// 0 = points may touch
// max: width/2 or height/2
const horizontalCenterPadding = 20;
const verticalCenterPadding = 5;

// Animation
const centerX = svgWidth / 2;
const centerY = svgHeight / 2;
const w = centerX - horizontalCenterPadding - horizontalEdgePadding;
const h = centerY - verticalCenterPadding - verticalEdgePadding;

// Show me your true form!

const RandomPolygon = () => {
  const con = useRef(null);
  useEffect(() => {
    console.log("test");
    const red = Snap.select(".red");
    const blue = Snap.select(".blue");

    const animate = () => {
      [red, blue].forEach((layer) => {
        layer.animate(
          {
            points: [
              // x1, y1
              Math.random() * w + horizontalEdgePadding,
              Math.random() * h + verticalEdgePadding,
              // x2, y2
              Math.random() * w + centerX + horizontalCenterPadding,
              Math.random() * h + verticalEdgePadding,
              // x3, y3
              Math.random() * w + centerX + horizontalCenterPadding,
              Math.random() * h + centerY + verticalCenterPadding,
              // x4, y4
              Math.random() * w + horizontalEdgePadding,
              Math.random() * h + centerY + verticalCenterPadding,
            ],
          },
          animationSpeed
        );
      });
    };

    const interval = setInterval(() => {
      animate();
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <svg
        ref={con}
        className="selector"
        viewBox="0 0 100 50"
        preserveAspectRatio="none"
      >
        <polygon className="red" points="10,20 80,20 80,30, 20,30"></polygon>
        <polygon className="blue" points="30,10 90,30 100,35, 20,50"></polygon>
      </svg>
    </>
  );
};

export default RandomPolygon;
