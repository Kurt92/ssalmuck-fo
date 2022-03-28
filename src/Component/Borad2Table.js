import { Table } from "react-bootstrap";

export default function Borad2Table() {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div
      style={{
        width: "80%",
        height: "600px",
        paddingTop: "50px",
        margin: "0 auto",
      }}
    >
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {array.map((index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
