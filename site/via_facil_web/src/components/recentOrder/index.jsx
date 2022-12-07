import Orders from "./Orders";
import "./recentOrder.css";
const RecentOrder = () => {
  return (
    <div className="recent-orders">
      <h2>Solicitações Recentes</h2>
      <table>
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Data</th>
            <th>Valor R$</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <Orders
          name={"Puc Campinas"}
          protocol={"20 ago, 2022"}
          value={"2031,00"}
          status={"Pago"}
          img={
            "https://www.puc-campinas.edu.br/wp-content/uploads/2022/06/logo-puc.png"
          }
        />
        <Orders
          name={"CPFL"}
          protocol={"05 set, 2022"}
          value={"231,56"}
          status={"Pago"}
          img={
            "https://seeklogo.com/images/C/CPFL_Energia-logo-9641BA2E64-seeklogo.com.png"
          }
        />
        <Orders
          name={"Sanasa"}
          protocol={"03 set, 2022"}
          value={"156,75"}
          status={"Pendente"}
          img={
            "https://atualizo.com.br/wp-content/uploads/2019/09/SANASA-LOGO-300x200.png"
          }
        />
        <Orders
          name={"Unimed"}
          protocol={"07 set, 2022"}
          value={"450,00"}
          status={"Pago"}
          img={
            "https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/56e2ec480bef623ab7cb99c7ba670617-1024x659.jpg"
          }
        />
      </table>
    </div>
  );
};

export default RecentOrder;
