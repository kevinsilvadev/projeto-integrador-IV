import "./recentOrder.css";

const Bills = ({ protocol, value, status, onClick}) => {

  return (
    <>
      <tbody>
        <tr>
          <td>{protocol}</td>
          <td>R$ {value}</td>
          <td className="warning">{status}</td>
          <td className="cor-primaria">
            <button onClick={onClick} className="bill-button">Emitir</button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Bills;
