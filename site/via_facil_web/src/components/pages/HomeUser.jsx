import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import { useEffect, useState } from "react";
import RecentOrder from "../recentOrder";
import api from "../../services/api";
import AuthService from "../../services/auth.service";
import CompanyBill from "../companyBill";
import CustomerService from "../../services/customer.service";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState("");
  const customer = AuthService.getCurrentUser();

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  useEffect(() => {
    const companies = CustomerService.getCompanies(customer.username).then(
      (response) => {
        console.log(response.data);
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
  }, []);

  function renderLinkedCompanies() {
    let ret = [];
    
    for (let i = 0; i < content.length; i++) {
      ret.push(
        <CompanyBill
          img={content[i].imgLogo}
          name={content[i].name}
          redirect={"/view-bill"}
          onClick={() => {
            const customer = AuthService.getCurrentUser();
            api
              .post(
                `http://localhost:8080/api/auth/addCompany?companyCnpj=${content[i].cnpj}&customerCpf=${customer.username}`
              )
              .then((response) => localStorage.setItem("cnpj",JSON.stringify(content[i].cnpj)))
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
      className={state.clicked ? "HomeUser_content active" : "HomeUser_content"}
    >
      <div className="homeUser-header">
        <h1>Via Fácil</h1>
      </div>

      <div className="homeUser-row">
        <VerticalNavBar onClick={handleClick} />
        <div className="col-12 col-s-12">
          <div className="homeUser-recentOrder">
            <h2>Empresas Vinculadas</h2>
            <div className="homeUser-aside">{renderLinkedCompanies()}</div>
            <RecentOrder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
