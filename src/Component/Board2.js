import PaginationComp from "./PaginationComp";
import Borad2Table from "./Borad2Table";
import Borad2Search from "./Borad2Search";
import Board2Button from "./Board2Button";
import { Button } from "react-bootstrap";

export default function Board2() {
  return (
    <>
      <Borad2Search />
      <Board2Button />
      <Borad2Table />
      <PaginationComp />
    </>
  );
}
