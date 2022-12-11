import { useEffect, useState } from "react";
import Bills from "./Bills";
import "./recentOrder.css";
import api from "../../services/api";
import BillService from "../../services/bill.service";
import AuthService from "../../services/auth.service";

const ListBill = () => {
  const [content, setContent] = useState("");
  const customer = AuthService.getCurrentUser();

  
  
  useEffect(() => {
    BillService.getBill(
      customer.username,
      JSON.parse(localStorage.getItem('cnpj'))
    ).then(
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

  

  function renderLinkedBill(){
    let ret = [];
    for (let i = 0; i < content.length; i++) {
      ret.push(
        <Bills
          protocol= {content[i].dueDate}
          value={content[i].documentValue}
          status={content[i].discount}
        />
      )
    }
    
    return ret
  }

  return (
    <div className="recent-bills">
      <h2>Contas ainda não pagas:</h2>
      <table>
        <thead>
          <tr>
            <th>Vencimento</th>
            <th>Valor R$</th>
            <th>Desconto</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        {renderLinkedBill()}
      </table>
    </div>
  );
};

export default ListBill;