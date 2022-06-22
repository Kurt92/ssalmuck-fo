import NavbarOffcanvas from "./NavbarOffcanvas";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let login = () => {
    window.location.href = "/login";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div
          className="container-fluid"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/">
            SsalMuck.com
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/board2">
                  Link
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/board">
                  Board
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              <button
                className="btn btn-outline-success"
                type="button"
                onClick={login}
              >
                Login
              </button>

              <NavbarOffcanvas />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
