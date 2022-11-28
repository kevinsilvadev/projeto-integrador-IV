import { useEffect } from "react";
import Bills from "./Bills";
import "./recentOrder.css";
import BillService from "../../services/bill.service";
import AuthService from "../../services/auth.service";

const ListBill = () => {
  useEffect(()=> {
    BillService.getBill(AuthService.getCurrentUser().username,AuthService.getCurrentUser().companyList[0].cnpj).then(
      (response) => {
        console.log(response.data)
      },
    )
  })
  return (
    <div className="recent-bills">
      <h2>Boletos disponíveis</h2>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor R$</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <Bills
          protocol={"20 ago, 2022"}
          value={"2031,00"}
          status={"Pago"}
          img={
            "https://www.puc-campinas.edu.br/wp-content/uploads/2022/06/logo-puc.png"
          }
        />
        <Bills
          protocol={"05 set, 2022"}
          value={"231,56"}
          status={"Pago"}
          img={
            "https://seeklogo.com/images/C/CPFL_Energia-logo-9641BA2E64-seeklogo.com.png"
          }
        />
        <Bills
          protocol={"03 set, 2022"}
          value={"156,75"}
          status={"Pendente"}
          img={
            "https://atualizo.com.br/wp-content/uploads/2019/09/SANASA-LOGO-300x200.png"
          }
        />
        <Bills
          protocol={"07 set, 2022"}
          value={"450,00"}
          status={"Pago"}
          img={
            "https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/56e2ec480bef623ab7cb99c7ba670617-1024x659.jpg"
          }
        />
      </table>
      <a href="#">Show All</a>
    </div>
  );
};

export default ListBill;
