import "../css/credit.css";
import DialogueBubble from "../com/DialogueBubble";

const Credit = () => {
  return (
    <>
      <div className="creditPage">
        <div className="creditPageBG animate__animated animate__rotateInUpLeft"></div>
        <div className="creditPageContainter">
          <div className="leftContainter animate__animated animate__fadeInDown">
            <div className="leftContainterBG">
              <div className="creditPageContent">
                <p>
                  The whole concept of this portfolio comes from Persona 5 @
                  ATLUS. I do not own the rights to those materials.
                </p>
                <p>
                  Some materials used from: Kevin Quach @ codepen, Drew Powers @
                  codepen, hudman2002 @ reddit.
                </p>
                <p>
                  Fonts used: Earwig Factory, p5hatty, Markin_LT_Ultra_Bold.
                </p>
                <p>
                  Some of the library used: Animate.css, snapsvg-cjs, use-sound,
                  fortawesome.
                </p>
              </div>
            </div>
          </div>
          <div className="rightContainter animate__animated animate__fadeInUp">
            <div className="rightContainterBG"></div>
            <div className="linkWrap animate__animated animate__bounceInDown">
              <div className="scaleY">
                <a
                  href="https://store.steampowered.com/app/1687950"
                  target="_blank"
                  rel="noreferrer"
                  className="steamLink"
                >
                  Now On Sale
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DialogueBubble />
    </>
  );
};

export default Credit;
