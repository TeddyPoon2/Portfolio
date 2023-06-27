import { useState, useEffect } from "react";
import "../css/bgmBtn.css";
import bgm from "../audio/Beneath the Mask_instrumental version_-9db.ogg";

const Bgm = () => {
  const [audio] = useState(new Audio(bgm));
  const [bgmState, setPlay] = useState(true);
  audio.loop = true;

  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!bgmState) {
      //handle web browser that blocked auto play like
      //Chrome
      audio.play().catch(() => {
        setPlay(false);
      });
    } else if (!bgmState) {
      audio.pause();
    }
  });

  // console.log(`${bgmState}`);

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
        Play/Pause
      </button>
    </>
  );
};

export default Bgm;
