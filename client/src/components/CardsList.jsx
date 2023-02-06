import Table from "react-bootstrap/Table";

function CardsList({ list = [] }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Card Number</th>
          <th>Balance</th>
          <th>Limit</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ name, cardNumber, limit, balance }) => (
          <tr>
            <td>{name}</td>
            <td>{cardNumber}</td>
            <td>{balance}</td>
            <td>{limit}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CardsList;
