import { useState } from "react";
import Modal from "../modalViewBill";
import "./recentOrder.css";

const Bills = ({ protocol, value, status, img }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <tbody>
        <tr>
          <td>{protocol}</td>
          <td>R$ {value}</td>
          <td className="warning">{status}</td>
          <td className="cor-primaria">
            <button onClick={() => {
                setOpenModal(true)}} className="bill-button">Emitir</button>
          </td>
        </tr>
      </tbody>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Bills;
