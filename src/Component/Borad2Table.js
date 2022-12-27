import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Borad2Table() {
  let [board, setBoard] = useState();

  let boardData = () => {
    axios
      .get("http://localhost:8099/board2")
      .then((result) => {
        console.log("success");
        let res = result.data;
        console.log(result.data);
        console.log("res : ", res);

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
                <tr key={board.id}>
                  <td>{board.id}</td>
                  <td>{board.title}</td>
                  <td>{board.username}</td>
                  <td>{board.createDT}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
