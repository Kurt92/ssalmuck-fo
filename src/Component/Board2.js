import PaginationComp from "./PaginationComp";
import Board2Table from "./Board2Table";
import Board2Search from "./Board2Search";
import Board2Button from "./Board2Button";
import { createContext, useEffect, useState } from "react";

export default function Board2() {
  let [board2, setBoard2] = useState();

  const getPagingData = (result) => {
    setBoard2(result);
    console.log("board2 get", result);
  };

  /*useEffect(() => {
    console.log("useEffc in board2", "change");
  }, [board2]);*/

  return (
    <>
      <Board2Search />
      <Board2Button />
      <Board2Table data={board2} />
      <PaginationComp getPagingData={getPagingData} />
    </>
  );
}
