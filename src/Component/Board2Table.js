import { Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Board2Table(props) {
  let [board, setBoard] = useState();

  const params = {
    page: 0,
    size: 10,
  };

  let boardData = () => {
    axios
      .get("http://localhost:8099/board2", { params })
      .then((result) => {
        console.log("res2 : ", result.data.content);
        let res = result.data.content;
        setBoard(res);
      })
      .catch(() => {
        console.log("failed");
      });
  };

  useEffect(() => {
    boardData();
  }, []);

  useEffect(() => {
    setBoard(props.data);

    console.log("last", board);
  }, [props]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "600%",
        paddingTop: "50px",
        margin: "0 auto",
      }}
    >
      <if>
        <Table>
          <thead>
            <tr>
              <th style={{ width: "5%" }}>#</th>
              <th style={{ width: "5%" }}>index</th>
              <th style={{ width: "40%" }}>제목</th>
              <th style={{ width: "20%" }}>유저명</th>
              <th style={{ width: "5%" }}>조회수</th>
              <th style={{ width: "20%" }}>생성일</th>
            </tr>
          </thead>
          <tbody>
            {board &&
              board.map((board, i) => {
                return (
                  <tr key={board.i}>
                    <td key={board.i}></td>
                    <td>{board.id}</td>
                    <td>
                      <Link
                        to={`/postDetail/${board.id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {board.title}
                      </Link>
                    </td>
                    <td>{board.username}</td>
                    <td></td>
                    <td>{board.createdDate}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </if>
    </div>
  );
}
