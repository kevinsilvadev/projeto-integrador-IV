import './CompanyCard.css'
import {Link} from "react-router-dom";


const CompanyCard = ({
  name,
  imageProfile,
  redirect, 
  cnpj,
  token
}) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={imageProfile} alt="" />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <div className="social-links">
        <div className="item4">
          <Link className="card-companyBill-button" to={{pathname: redirect}} state={{cnpj : cnpj, token : token}}>Boletos</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
