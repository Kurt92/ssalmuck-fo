import Styles from "./css/mainMenuContainer.module.css";
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
    <div className={Styles.container}>
      <div
        className={Styles.flip_container}
        onTouchStart="this.classList.toggle('hover');"
      >
        <div className={Styles.flipper}>
          <div className={Styles.front}></div>
          <div className={Styles.back}>
            <div className={Styles.notice}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={Styles.flip_container}
        onTouchStart="this.classList.toggle('hover');"

      >
        <div className={Styles.flipper}>
          <div className={Styles.front}>front</div>
          <div className={Styles.back}>back</div>
        </div>
      </div>
        <div
            className={Styles.flip_container}
            onTouchStart="this.classList.toggle('hover');"

        >
            <div className={Styles.flipper}>
                <div className={Styles.front}>front</div>
                <div className={Styles.back}>back</div>
            </div>
        </div>

        <div
            className={Styles.flip_container}
            onTouchStart="this.classList.toggle('hover');"

        >
            <div className={Styles.flipper}>
                <div className={Styles.front}>front</div>
                <div className={Styles.back}>back</div>
            </div>
        </div>
    </div>
  );
}
