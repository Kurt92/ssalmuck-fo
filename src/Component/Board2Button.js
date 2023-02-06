import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Board2Button() {
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "70%",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", width: "60%", marginLeft: "auto" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div style={{ width: "30%" }}>
          <Button variant="success">search</Button>
          <Button variant="warning">
            <Link to="/board2/input">insertForm</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
