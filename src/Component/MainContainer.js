import Styles from "./css/mainContainer.module.css";

export default function MainContainer() {
  return (
    <div className={Styles.container}>
      <div className={Styles.row}>
        <div
          className={Styles.col_md_4}
          style={{
            backgroundColor: "#6c757d",
          }}
        >
          div3
        </div>
        <div
          className={Styles.col_md_4}
          style={{
            backgroundColor: "#3f6383",
          }}
        >
          div2
        </div>
        <div
          className={Styles.col_md_4}
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
