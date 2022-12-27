import { useState } from "react";
import axios from "axios";

export default function Board2Input() {
  let [boardInput, setBoardInput] = useState();

  let boardInputData = () => {
    axios
      .post("http://localhost:8099/board2")
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("fail");
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div
        style={{
          display: "felx",
          border: "1px solid red",
          width: "80%",
          height: "1000px",
        }}
      >
        insert
        <div style={{ border: "1px solid red" }}>
          <table style={{ border: "1px solid black" }}>
            <tr style={{ height: "50px" }}>
              <td style={{ width: "100px" }}>title</td>
              <td style={{ width: "400px" }}>
                <input
                  type={"text"}
                  id={"title"}
                  placeholder={"제목을입력하세요"}
                />
              </td>
            </tr>
            <tr style={{ height: "50px" }}>
              <td style={{ width: "100px" }}>아이디</td>
              <td style={{ width: "400px" }}>
                <input type={"text"} id={"userId"} />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div style={{ border: "1px solid red" }}>
          <textarea
            id={"content"}
            placeholder="입력하세요"
            style={{ width: "80%", height: "200px" }}
          />
        </div>
        <div>
          <button>insert</button>
        </div>
      </div>
    </div>
  );
}
