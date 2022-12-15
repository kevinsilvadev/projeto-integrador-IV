import { useEffect, useState } from "react";
import Bills from "./Bills";
import "./recentOrder.css";
import BillService from "../../services/bill.service";
import AuthService from "../../services/auth.service";
import { useLocation } from "react-router-dom";

const ListBill = () => {
  const [content, setContent] = useState("");
  const customer = AuthService.getCurrentUser();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [amountCharged, setAmountCharged] = useState("");
  const bill = {
    amountCharged: '0',
    documentValue: '0',
    documentNumber: '0',
    dueDate: '0',
    penalty: '0'
  }

  useEffect(() => {
    BillService.getBill(customer.username, location.state.cnpj).then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  let contasPendentes = [];
  let contasPagas = [];

  for (let i = 0; i < content.length; i++) {
    if (content[i].status === "PENDENTE") {
      contasPendentes.push(
        content[i]
      );
    } else {
      contasPagas.push(
        content[i]
      );
    }
  }

  function renderLinkedBillPendentes() {
    let ret = [];
    for (let i = 0; i < contasPendentes.length; i++) {
      ret.push(
        <Bills
          protocol={contasPendentes[i].dueDate}
          value={contasPendentes[i].documentValue}
          status={contasPendentes[i].status}
          bill={content[i]}
          redirect={"/show-bill"}
        />
      );
    }

    return ret;
  }

  function naoTemContas() {
    if (contasPagas.length === 0) {
      return <h3 className="semContas">Voce não possui contas pagas ainda.</h3>;
    }
    return;
  }

  function temContas() {
    if (contasPendentes.length === 0) {
      return <h3 className="semContas">Voce não possui contas pendentes.</h3>;
    }
    return;
  }

  function renderLinkedBillPagas() {
    let ret = [];
    for (let i = 0; i < contasPagas.length; i++) {
      ret.push(
        <Bills
          protocol={contasPagas[i].dueDate}
          value={contasPagas[i].documentValue}
          status={contasPagas[i].status}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      );
    }

    return ret;
  }


  return (
    <div className="recent-bills">
      <h2>Contas ainda não pagas:</h2>
      <table className="recent-bills-table">
        <thead>
          <tr>
            <th>Vencimento</th>
            <th>Valor R$</th>
            <th>Status</th>
            <th>Emissão</th>
            <th></th>
          </tr>
        </thead>
        {renderLinkedBillPendentes()}
      </table>
      {temContas()}
      <h2>Contas que você já pagou:</h2>
      <table className="recent-bills-table">
        <thead>
          <tr>
            <th>Vencimento</th>
            <th>Valor R$</th>
            <th>Status</th>
            <th>Emissão</th>
            <th></th>
          </tr>
        </thead>
        {renderLinkedBillPagas()}
      </table>
      {naoTemContas()}
    </div>
  );
};

export default ListBill;
