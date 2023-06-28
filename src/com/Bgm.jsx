import { useState, useEffect, useRef } from "react";
import "../css/bgmBtn.css";
import bgm from "../audio/Beneath the Mask_instrumental version_-9db.ogg";

// eslint-disable-next-line react/prop-types
const Bgm = ({ isInteracted }) => {
  const [audio] = useState(new Audio(bgm));
  const [bgmState, setPlay] = useState(true);
  const audioContext = new AudioContext();
  audio.loop = true;
  // const stateRef = useRef(audioContext.state);

  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!bgmState) {
      //handle web browser that blocked auto play like Chrome
      console.log("play");
      audio.play();
      // .catch(() => {
      //   setPlay(false);
      // });
    } else if (!bgmState) {
      audio.pause();
    }
  }, [bgmState, audioContext.state, audio]);

  // capture user first interact
  // useEffect(() => {
  //   if (isInteracted === 1 && !bgmState) {
  //     setPlay(true);
  //   }
  // }, [isInteracted]);

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
        {audio.paused ? "Play" : "Pause"}
      </button>
    </>
  );
};

export default Bgm;
