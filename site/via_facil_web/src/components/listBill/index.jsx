import { useEffect, useState } from "react";
import Bills from "./Bills";
import "./recentOrder.css";
import BillService from "../../services/bill.service";
import AuthService from "../../services/auth.service";
import { useLocation } from "react-router-dom";
import ModalViewBill from "../modalViewBill";

const ListBill = () => {
  const [content, setContent] = useState("");
  const customer = AuthService.getCurrentUser();
  const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [amountCharged, setAmountCharged] = useState("");

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
        <Bills
          protocol={content[i].dueDate}
          value={content[i].documentValue}
          status={content[i].status}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      );
    } else {
      contasPagas.push(
        <Bills
          protocol={content[i].dueDate}
          value={content[i].documentValue}
          status={content[i].status}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      );
    }
  }

  function renderLinkedBillPendentes() {
    let ret = [];
    for (let i = 0; i < contasPendentes.length; i++) {
      ret.push(
        <Bills
          protocol={contasPendentes[i].props.protocol}
          value={contasPendentes[i].props.value}
          status={contasPendentes[i].props.status}
          onClick={() => {
            openBill(i);
            setOpenModal(true);
          }}
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
          protocol={contasPagas[i].props.protocol}
          value={contasPagas[i].props.value}
          status={contasPagas[i].props.status}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      );
    }

    return ret;
  }

  function openBill(i) {
    let bill = []
    let y = true;
    let vencimento = ""
    
    console.log(content[i])

    if(content[i] !== undefined) {
      console.log("deu certo")
      bill.push(content[i])
      console.log(bill[0])
      y = false;
    }


    return (
      <ModalViewBill
        amountCharged={"bill[0].amountCharged"}
        discount={"console.log(contasPendentes[0].props)"}
        documentNumber={"asdadasdas"}
        documentValue={"asdadasdas"}
        dueDate={y ? "erro" : bill[0].validade}
        penalty={"asdadasdas"}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    );
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
        {openBill()}
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
