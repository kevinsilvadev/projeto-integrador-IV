import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import CalendarDate from "../calendar";
import { useState } from "react";
import Insights from "../insights";
import RecentOrder from "../recentOrder";

import CompanyBill from "../companyBill";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <div
      className={state.clicked ? "HomeUser_content active" : "HomeUser_content"}
    >
      <div className="homeUser-header">
        <h1>Dashboard</h1>
      </div>

      <div className="homeUser-row">
        <VerticalNavBar onClick={handleClick} />
        <div className="col-9 col-s-12">
          <CalendarDate />
          <div className="grid-container">
            <Insights
              type={"sales"}
              title={"Total Sales"}
              percentage={"81"}
              value={"2500,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
            <Insights
              type={"expenses"}
              title={"Total Expenses"}
              percentage={"62"}
              value={"1200,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
            <Insights
              type={"income"}
              title={"Total Income"}
              percentage={"44"}
              value={"2250,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
          </div>
          <div className="homeUser-recentOrder">
            <RecentOrder />
          </div>
        </div>

        <div className="col-3 col-s-12">
          <div className="homeUser-aside">
            <CompanyBill
              img={
                "https://www.tvmagazine.com.br/imagens/icones/600/sky.png"
              }
              name="SKY"
            />
            <CompanyBill
              img={
                "https://atualizo.com.br/wp-content/uploads/2019/09/SANASA-LOGO-300x200.png"
              }
              name="SANASA Campinas"
            />
            <CompanyBill
              img={
                "https://www.puc-campinas.edu.br/wp-content/uploads/2022/06/logo-puc.png"
              }
              name="PUC Campinas"
            />
            <CompanyBill
              img={
                "https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/56e2ec480bef623ab7cb99c7ba670617-1024x659.jpg"
              }
              name="Unimed"
            />
            <CompanyBill
              img={
                "https://rocketworks.solutions/assets/img/custom-rocket/clientes/pignet.jpg"
              }
              name="Pignet"
            />
            <CompanyBill
              img={
                "https://seeklogo.com/images/C/CPFL_Energia-logo-9641BA2E64-seeklogo.com.png"
              }
              name="CPFL Energia"
            />
            <CompanyBill
              img={
                "https://2.bp.blogspot.com/-K1_D0PEZYaI/XLRe8RWKoBI/AAAAAAAAHSg/PK-WXwI9lDc0gTCxlJQJpztc-hK_DycygCLcBGAs/s1600/VIV-web-logo.png"
              }
              name="VIVO"
            />
            <CompanyBill
              img={
                "https://1000marcas.net/wp-content/uploads/2021/02/Claro-Logo.png"
              }
              name="Claro"
            />
            <CompanyBill
              img={
                "https://logosmarcas.net/wp-content/uploads/2021/03/TIM-Logo-1999-2004.jpg"
              }
              name="TIM"
            />
          </div>
        </div>
      </div>

      <div className="homeUser-footer">
        <p>
          Resize the browser window to see how the content respond to the
          resizing.
        </p>
      </div>
    </div>
  );
}

export default HomeUser;
