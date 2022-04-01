import "./css/mainMenuContainer.css";

export default function MainMenuContainer() {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          className="col-md-4"
          style={{
            width: "300px",
            height: "300px",
            border: "solid red",
            padding: "10px",
          }}
        >
          공지사항
        </div>
        <div
          className="col-md-4"
          style={{
            width: "300px",
            height: "300px",
            border: "solid red",
            padding: "10px",
          }}
        >
          div2
        </div>
        <div
          className="col-md-4"
          style={{
            width: "300px",
            height: "300px",
            border: "solid red",
            padding: "10px",
          }}
        >
          div2
        </div>
        <div
          className="flip-container"
          onTouchStart="this.classList.toggle('hover');"
          style={{
            width: "300px",
            height: "300px",
            border: "solid red",
            padding: "10px",
          }}
        >
          <div className="flipper">
            <div className="front">front</div>
            <div className="back">back</div>
          </div>
        </div>
      </div>
    </div>
  );
}
