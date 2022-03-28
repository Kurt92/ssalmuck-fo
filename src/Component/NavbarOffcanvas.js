import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

export default function NavbarOffcanvas({ name, ...props }) {
  const options = [
    {
      name: "Enable backdrop (default)",
      scroll: false,
      backdrop: true,
    },
    {
      name: "Disable backdrop",
      scroll: false,
      backdrop: false,
    },
    {
      name: "Enable body scrolling",
      scroll: true,
      backdrop: false,
    },
    {
      name: "Enable both scrolling & backdrop",
      scroll: true,
      backdrop: true,
    },
  ];

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          backgroundColor: "white",
          font: "rgb(205 193 216)",
          borderColor: "rgb(58 41 74)",
        }}
      >
        <span className="navbar-toggler-icon"></span>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={"end"}
        scroll={"true"}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="offcanvasNavbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="offcanvasNavbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
