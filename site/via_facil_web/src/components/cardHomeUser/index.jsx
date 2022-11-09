import CompanyCardComponent from "../company_card_component";
import "./CardHomeUser.css";

const CardHomeUser = ({ title }) => {
  return (
    <div className="card-container-home-user">
      <div className="card-content-home-user">
        <div className="card-title-home-user">
          <h3>{title}</h3>
        </div>
        <div className="divider div-transparent"></div>
        <ul className="card-body-home-user">
          <CompanyCardComponent
            title={"Sky"}
            imageUrl="https://www.tvmagazine.com.br/imagens/icones/600/sky.png"
          />
          <CompanyCardComponent
            title={"CPFL"}
            imageUrl="https://seeklogo.com/images/C/CPFL_Energia-logo-9641BA2E64-seeklogo.com.png"
          />
          <CompanyCardComponent
            title={"Sanasa"}
            imageUrl="https://atualizo.com.br/wp-content/uploads/2019/09/SANASA-LOGO-300x200.png"
          />
          <CompanyCardComponent
            title={"PUC-Campinas"}
            imageUrl="https://www.puc-campinas.edu.br/wp-content/uploads/2022/06/logo-puc.png"
          />
          <CompanyCardComponent
            title={"Unimed"}
            imageUrl="https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/56e2ec480bef623ab7cb99c7ba670617-1024x659.jpg"
          />
        </ul>
      </div>
    </div>
  );
};

export default CardHomeUser;
