import { useState } from "react";
import axios from "axios";

export default function Board2Input() {
  let [boardInput, setBoardInput] = useState();

  let boardInputData = () => {
    const param = {};
    let title = document.getElementById("title").value;
    let username = document.getElementById("username").value;
    param.title = title;
    param.username = username;
    console.log("post", param);
    console.log(JSON.stringify(param));

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:8099/board2", JSON.stringify(param), axiosConfig)
      .then(() => {
        console.log("success");
        document.getElementById("title").value = "";
        document.getElementById("username").value = "";
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
            <tbody>
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
                  <input type={"text"} id={"username"} />
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
              </tr>
            </tbody>
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
          <button
            type={"submit"}
            onClick={() => {
              boardInputData();
            }}
          >
            insert
          </button>
        </div>
      </div>
    </div>
  );
}
