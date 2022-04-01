import cardStyle from "./css/mainCardStyle.css";
import axios from "axios";
import { useEffect, useState } from "react";

let cardCnt = 5;
let array = [1, 2, 3, 4, 5, 6, 7, 8];
let cocodico = [];

export default function MainCard(props) {
  let [userID, setUserID] = useState();

  let data1 = () => {
    axios
      .get("http://localhost:3005/user")
      .then((result) => {
        console.log("succese");
        console.log(result);
        setUserID(result.data);
      })
      .catch(() => {
        console.log("failed");
      });
  };

  useEffect(() => {
    data1();
  }, []);

  return (
    <>
      <div
        className="cardGroup"
        style={{
          width: "80%",
          flexWrap: "wrap",
          alignContent: "space-between",
          margin: "0 auto",
        }}
      >
        {userID &&
          userID.map((userID, i) => {
            return (
              <div key={userID.key} className="card" style={{ width: "18rem" }}>
                <img
                  src={`image/cocodico${i + 1}.jpeg`}
                  className="card-img-top"
                  alt="cocodico"
                  style={{
                    display: "flex",
                    objectFit: "contain",
                    width: "280px",
                    height: "280px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{userID.id}</h5>
                  <p className="card-text">{userID.content}</p>
                  <a href="#" className="btn btn-primary">
                    신청하기
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
