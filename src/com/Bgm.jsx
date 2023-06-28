import { useState, useEffect } from "react";
import "../css/bgmBtn.css";
import bgm from "../audio/Beneath the Mask_instrumental version_-9db.ogg";

// eslint-disable-next-line react/prop-types
const Bgm = ({ isInteracted }) => {
  // const [audio] = new Audio(bgm);
  const [audio] = useState(new Audio(bgm));
  const [bgmState, setPlay] = useState(true);
  const [isInteract] = useState(isInteracted);
  const ref = isInteract.current;
  audio.loop = true;

  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!bgmState) {
      //handle web browser that blocked auto play like Chrome
      audio.play().catch(() => {
        setPlay(false);
      });
    } else if (!bgmState) {
      audio.pause();
    }
  }, [bgmState]);

  //capture is user interacted and auto play
  useEffect(() => {
    if (ref === 1) {
      setPlay(true);
    }
  }, [ref]);

  const handleClick = () => {
    if (!bgmState) {
      setPlay(true);
      // eslint-disable-next-line no-extra-boolean-cast
    } else if (!!bgmState) {
      setPlay(false);
    }
  };

  return (
    <>
      <button onClick={handleClick} className="bgmBtn">
        {bgmState ? "Pause" : "Play"}
      </button>
    </>
  );
};

export default Bgm;
