import { useState, useEffect } from "react";
import "./css/pagination.css";
import Pagination from "react-js-pagination";
import axios from "axios";

export default function PaginationComp(props) {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState();
  const offset = (page - 1) * limit;
  let params = {
    page: page,
    size: limit,
  };
  const { getPagingData } = props;
  const handlePageChange = (page, props) => {
    setPage(page);
    params.page = page - 1;
    console.log(limit);
    console.log(page);
    axios
      .get("http://localhost:8099/board2", { params })
      .then((result) => {
        console.log("result", result);
        getPagingData(result.data.content);
      })
      .catch(() => {
        alert("fail");
      });
  };
  useEffect(() => {}, [result]);
  useEffect(() => {}, []);

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
}
