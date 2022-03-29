export default function Borad2Search() {
  return (
    <div
      style={{
        width: "90%",
        height: "300px",

        margin: "0 auto",
      }}
    >
      <div style={{ width: "70%", margin: "0 auto", paddingTop: "70px" }}>
        <table
          border={1}
          style={{ width: "100%", height: "200px", textAlign: "left" }}
        >
          <tr>
            <td style={{ width: "100px" }}>name</td>
            <td style={{ width: "170px" }}>
              <input type="radio" />
              somthing
            </td>
            <td style={{ width: "170px" }}>
              <input type="radio" />
              is
            </td>
            <td style={{ width: "170px" }}>
              <input type="radio" />
              somthing
            </td>
            <td style={{ width: "170px" }}>
              <input type="radio" />
              is
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
          </tr>
          <tr>
            <td>name</td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
