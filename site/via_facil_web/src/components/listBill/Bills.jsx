import "./recentOrder.css";
import {Link} from "react-router-dom";

const Bills = ({ redirect,protocol, value, status, bill }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{protocol}</td>
          <td>R$ {value}</td>
          <td className="warning">{status}</td>
          <td className="cor-primaria">
            <Link to={{pathname: redirect}} state={{bill}}className="bill-button">
              Emitir
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default Bills;
