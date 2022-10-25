import "./recentOrder.css";

const Orders = ({ name, protocol, value, status, img }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{protocol}</td>
          <td>R$ {value}</td>
          <td className="warning">{status}</td>
          <td className="cor-primaria">
            <img className="company-image" src={img} alt="" />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Orders;
