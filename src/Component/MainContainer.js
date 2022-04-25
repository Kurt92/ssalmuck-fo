import styles from "./css/mainContainer.css";

export default function MainContainer() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-4"
          style={{
            backgroundColor: "#6c757d",
          }}
        >
          div3
        </div>
        <div
          className="col-md-4"
          style={{
            backgroundColor: "#3f6383",
          }}
        >
          div2
        </div>
        <div
          className="col-md-4"
          style={{
            backgroundColor: "#6c757d",
          }}
        >
          div1
        </div>
      </div>
    </div>
  );
}
