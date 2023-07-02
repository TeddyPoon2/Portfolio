import "../css/Phone.css";

const Phone = () => {
  return (
    <>
      <div className="phone-container">
        <svg className="phone-svg">
          <polygon points="10,0 290,0 280,300 280,450 0,450" />
        </svg>
        <svg className="screen-border-svg">
          <polygon points="20,10 280,10 270,300 270,440 10,440" />
        </svg>
        <svg className="screen-svg">
          <polygon points="25,14 270,18 265,437 18,432" />
        </svg>
        <div className="screen">
          <div className="sns">
            <span className="lettering-under">SNS</span>
            <span className="lettering">
              <span style={"color: red"}>S</span>NS
            </span>
          </div>
          <svg className="zig-shadow">
            <polygon points="70,90  80,90  60,170  110,230  80,290  50,290  70,225  30,170" />
          </svg>
          <svg className="zig">
            <polygon points="70,80  80,80  60,160  110,220  80,280  50,280  70,215  30,160" />
          </svg>
          <div className="messages">
            <div className="contact">
              <svg className="border">
                <polygon points="0,5 60,0 70,30 10,55" />
              </svg>
              <svg className="outline">
                <polygon points="8,7 58,2 67,28 18,48" />
              </svg>
              <svg className="panel-b">
                <polygon points="12,11 56,5 64,26 20,42" />
              </svg>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/932431/Male_head_silhouette.svg" />
              <div className="text-container">
                <svg className="text-outline-1">
                  <polygon points="78,10 220,0 210,44 69,48" />
                </svg>
                <svg className="text-outline-2">
                  <polygon points="80,12 210,4 205,40 73,44" />
                </svg>
                <svg className="accent-outline-1">
                  <polygon points="57,20 68,7 72,13 78,10 76,22 64,25 62,20" />
                </svg>
                <svg className="accent-outline-2">
                  <polygon points="60,18 68,11 72,16 80,12 80,19 66,22 65,18" />
                </svg>
                <div className="text-skew">
                  <label>Where are you?</label>
                </div>
                <div className="message-type">
                  <svg className="lettering-outline">
                    <polygon points="0,3 9,1 16,4 17,13 13,18 11,25 3,25 2,17 3,12 0,10" />
                  </svg>
                  <span className="lettering">?</span>
                </div>
              </div>
            </div>
            <div className="contact">
              <svg className="border">
                <polygon points="0,5 60,0 70,30 10,55" />
              </svg>
              <svg className="outline">
                <polygon points="8,7 58,2 67,28 18,48" />
              </svg>
              <svg className="panel">
                <polygon points="12,11 56,5 64,26 20,42" />
              </svg>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/932431/Male_head_silhouette.svg" />
            </div>
            <div className="contact">
              <svg className="border">
                <polygon points="0,5 60,0 70,30 10,55" />
              </svg>
              <svg className="outline">
                <polygon points="8,7 58,2 67,28 18,48" />
              </svg>
              <svg className="panel">
                <polygon points="12,11 56,5 64,26 20,42" />
              </svg>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/932431/Male_head_silhouette.svg" />
            </div>
            <div className="contact">
              <svg className="border">
                <polygon points="0,5 60,0 70,30 10,55" />
              </svg>
              <svg className="outline">
                <polygon points="8,7 58,2 67,28 18,48" />
              </svg>
              <svg className="panel">
                <polygon points="12,11 56,5 64,26 20,42" />
              </svg>
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/932431/Male_head_silhouette.svg" />
            </div>
            <div className="ellipse">
              <svg>
                <polygon points="12,11 56,5 64,26 20,42" />
              </svg>
              <span>. . .</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Phone;
