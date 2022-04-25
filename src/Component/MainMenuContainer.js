import "./css/mainMenuContainer.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainMenuContainer() {
  let [notice, setNotice] = useState();

  let noticeData = () => {
    axios
      .get("http://localhost:3005/user")
      .then((result) => {
        setNotice(result.data);
        console.log(notice.data.title);
      })
      .catch(() => {
        console.log("failed");
      });
  };

  useEffect(() => {
    noticeData();
  }, []);

  return (
    <div className="container">
      <div
        className="flip-container"
        onTouchStart="this.classList.toggle('hover');"
      >
        <div className="flipper">
          <div className="front"></div>
          <div className="back">
            <div className="notice">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flip-container"
        onTouchStart="this.classList.toggle('hover');"
        style={{
          width: "300px",
          height: "300px",
          border: "solid red",
        }}
      >
        <div className="flipper">
          <div className="front">front</div>
          <div className="back">back</div>
        </div>
      </div>
      <div
        className="flip-container"
        onTouchStart="this.classList.toggle('hover');"
        style={{
          width: "300px",
          height: "300px",
          border: "solid red",
        }}
      >
        <div className="flipper">
          <div className="front">front</div>
          <div className="back">back</div>
        </div>
      </div>

      <div
        className="flip-container"
        onTouchStart="this.classList.toggle('hover');"
        style={{
          width: "300px",
          height: "300px",
          border: "solid red",
        }}
      >
        <div className="flipper">
          <div className="front">front</div>
          <div className="back">back</div>
        </div>
      </div>
    </div>
  );
}
