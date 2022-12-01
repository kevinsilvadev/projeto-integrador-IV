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
      AuthService.getCurrentUser().username,
      AuthService.getCurrentUser().companyList[0].cnpj
    ).then(
      (response) => {
        console.log(response.data);
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

  console.log(content.length)

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
      <h2>Boletos disponíveis</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor R$</th>
            <th>Desconto</th>
            <th></th>
          </tr>
        </thead>
        {renderLinkedBill()}
      </table>
      <a href="#">Show All</a>
    </div>
  );
};

export default ListBill;