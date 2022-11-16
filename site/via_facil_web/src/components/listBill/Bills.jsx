import "./recentOrder.css";

const Bills = ({ protocol, value, status, img }) => {
  return (
    <>
      <tbody>
        <tr>
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

export default Bills;
