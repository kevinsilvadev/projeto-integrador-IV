import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import { useEffect, useState } from "react";
import RecentOrder from "../recentOrder";
import AuthService from "../../services/auth.service";
import CustomerService from "../../services/customer.service";
import CompanyCard from "../CompanyCard";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });
  const [content, setContent] = useState("");
  const customer = AuthService.getCurrentUser();


  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  useEffect(() => {
    CustomerService.getCompanies(customer.username).then(
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
      
          <div className="column-profileCard">
            <div className="profileCard-container">
            <CompanyCard
              imageProfile={content[i].imgLogo}
              name={content[i].name}
              redirect={"/view-bill"}
              cnpj={content[i].cnpj}
            />
            </div>
          </div>
       
      );
    }

    return ret;
  }

  function naoTemEmpresas() {
    if (content.length === 0) {
      return <h3 className="semContas">Voce ainda não vinculou nenhuma empresa.</h3>
    }
    return
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
            <h2 className="h2-homeUser">Empresas que você é Cliente</h2>
            <div className="row-profileCard">
                {renderLinkedCompanies()}
                {naoTemEmpresas()}
            </div>
            <RecentOrder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
