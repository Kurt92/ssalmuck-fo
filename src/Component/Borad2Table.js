import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Borad2Table() {
  let [board, setBoard] = useState();

  let boardData = () => {
    axios
      .get("http://localhost:3005/board")
      .then((result) => {
        console.log("success");
        setBoard(result.data);
      })
      .catch(() => {
        console.log("failed");
      });
  };

  useEffect(() => {
    boardData();
  }, []);

  return (
    <div
      style={{
        width: "80%",
        height: "600px",
        paddingTop: "50px",
        margin: "0 auto",
      }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>제목</th>
            <th>유저명</th>
            <th>생성일</th>
          </tr>
        </thead>
        <tbody>
          {board &&
            board.map((board, i) => {
              return (
                <tr key={board.key}>
                  <td>{board.board_key}</td>
                  <td>{board.title}</td>
                  <td>{board.key}</td>
                  <td>@mdo</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
