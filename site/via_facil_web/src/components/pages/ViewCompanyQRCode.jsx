import "../../App.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import AuthService from "../../services/auth.service";
import CompanyBill from "../companyBill";
import CustomerService from "../../services/customer.service";
import CompanyCard from "../CompanyCard";

function ViewCompanyQRCode() {
  const [openModal, setOpenModal] = useState(false);

  const [content, setContent] = useState("");
  const customer = AuthService.getCurrentUser();

  useEffect(() => {
    const companies = CustomerService.getCompanies(customer.username).then(
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
    console.log(content);
  }, []);

 function renderLinkedCompanies() {
    let ret = [];

    for (let i = 0; i < content.length; i++) {
      ret.push(
      
          <div className="column-profileCard">
            <div className="profileCard-container">
            <CompanyCard
              imageProfile={content[i].imgLogo}
              name={content[i].name}
              redirect={"/view-bill/qrcode"}
              cnpj={content[i].cnpj}
            />
            </div>
          </div>
       
      );
    }

    return ret;
  }

  return (
    <div
      className={"HomeUser_content2"}
    >
      <div className="homeUser-header">
        <h1>Empresas que você é Cliente</h1>
      </div>

      <div className="homeUser-row">
        
        <div className="col-12 col-s-12">
            {renderLinkedCompanies()}
        </div>
      </div>
    </div>
  );
}

export default ViewCompanyQRCode;
