import "../../App.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import AuthService from "../../services/auth.service";
import CompanyBill from "../companyBill";
import CustomerService from "../../services/customer.service";

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
        <CompanyBill
          img={content[i].imgLogo}
          name={content[i].name}
          redirect={"/view-bill/qrcode"}
          onClick={() => {
            const customer = AuthService.getCurrentUser();
            api
              .post(
                `http://localhost:8080/api/auth/addCompany?companyCnpj=${content[i].cnpj}&customerCpf=${customer.username}`
              )
              .then((response) => console.log(content[i].id))
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      );
    }
    return ret;
  }

  return (
    <div
      className={"HomeUser_content2"}
    >
      <div className="homeUser-header">
        <h1>Empresas Cadastradas</h1>
      </div>

      <div className="homeUser-row">
        
        <div className="col-12 col-s-12">
          <div className="homeUser-aside">{renderLinkedCompanies()}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewCompanyQRCode;
