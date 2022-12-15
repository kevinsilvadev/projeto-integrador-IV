import "../../App.css";
import { useEffect, useState } from "react";
import AuthService from "../../services/auth.service";
import CompanyCard from "../CompanyCard";
import { useLocation } from "react-router-dom";

function ViewCompanyQRCode() {

  const [content, setContent] = useState("");
  const location = useLocation();
  const token = location.pathname.slice(1, 31)

  useEffect(() => {
    AuthService.getCompaniesByQrcode(token).then(
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
              token={token}
            />
            </div>
          </div>
       
      );
    }

    return ret;
  }

  function naoTemEmpresas() {
    if (content.length === 0) {
      return <h3 className="semContas">O cliente ainda não vinculou nenhuma empresa.</h3>
    }
    return
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
            {naoTemEmpresas()}
        </div>
      </div>
    </div>
  );
}

export default ViewCompanyQRCode;
