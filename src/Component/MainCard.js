import cardStyle from "./css/mainCardStyle.css";

export default function MainCard(props) {
  let cardCnt = 5;
  let array = [1, 2, 3, 4, 5, 6, 7, 8];

  let cocodico = [];

  return (
    <>
      <div
        className="cardGroup"
        style={{
          width: "80%",
          flexWrap: "wrap",
          alignContent: "space-between",
          margin: "0 auto",
        }}
      >
        {array.map((index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <img
                src={`image/cocodico${index}.jpeg`}
                className="card-img-top"
                alt="cocodico"
                style={{
                  display: "flex",
                  objectFit: "contain",
                  width: "280px",
                  height: "280px",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{props.stateCard}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  신청하기
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
