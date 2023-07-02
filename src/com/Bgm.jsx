import { useState, useEffect } from "react";
import "../css/bgmBtn.css";
import bgm from "../audio/Beneath the Mask_instrumental version_-9db.ogg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faCirclePause } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Bgm = ({ isInteracted }) => {
  const [audio] = useState(new Audio(bgm));
  const [bgmState, setPlay] = useState(true);
  const [isInteract] = useState(isInteracted);
  const audioCtx = new AudioContext();
  const ref = isInteract.current;
  audio.loop = true;

  useEffect(() => {
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!bgmState) {
      console.log(audioCtx.state);
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
    console.log("run1");
    if (ref === 1 && audioCtx.state !== "suspended") {
      setPlay(true);
    }
    return;
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
      <div className="bgmBtnWrap">
        {bgmState ? (
          <button className="bgmBtn" onClick={handleClick}>
            <FontAwesomeIcon
              icon={faCirclePause}
              style={{ color: "#ffffff" }}
              size="4x"
            />
          </button>
        ) : (
          <button className="bgmBtn" onClick={handleClick}>
            <FontAwesomeIcon
              icon={faCirclePlay}
              style={{ color: "#ffffff" }}
              size="4x"
            />
          </button>
        )}
        <span>BGM</span>
      </div>
    </>
  );
};

export default Bgm;
