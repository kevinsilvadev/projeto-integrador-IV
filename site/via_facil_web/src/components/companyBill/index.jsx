import "./CompanyBill.css";
import {Link} from "react-router-dom";

const CompanyBill = ({ img, name, redirect, cnpj }) => {
  return (
    <div>
      <div className="companyBill-container">
        <div className="item2">
          <div className="companyBill-img">
            <img src={img} alt="Foto da empresa" />
          </div>
        </div>
        <div className="item3">
          <p>{name}</p>
        </div>
        <div className="item4">
          <Link className="companyBill-button" to={{pathname: redirect}} state={cnpj}>Boletos</Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyBill;
