import "./CompanyBill.css";
import { Button } from "../button";

const CompanyBill = ({img, name}) => {
  return (
    <div>
      <div class="companyBill-container">
        <div class="item2">
          <div className="companyBill-img">
            <img
              src={img}
              alt="Foto da empresa"
            />
          </div>
        </div>
        <div class="item3"><p>{name}</p></div>
        <div class="item4">
          <Button to="../../pages/SignUp.js">Boletos</Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default CompanyBill;
