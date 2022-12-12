import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import { useEffect, useState } from "react";
import RecentOrder from "../recentOrder";
import AuthService from "../../services/auth.service";
import CompanyBill from "../companyBill";
import CustomerService from "../../services/customer.service";
import CompanyCard from "../CompanyCard";

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
          cnpj={content[i].cnpj}
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
            <h2>Suas Empresas Vinculadas</h2>
            <div className="homeUser-aside">{renderLinkedCompanies()}</div>
            <RecentOrder />
          </div>
          <div className="row-profileCard">
          <div className="column-profileCard">
            <div className="profileCard-container">
            <CompanyCard
              name="VIVO"
              imageProfile="https://skycms.s3.amazonaws.com/images/37907079/sky.png"
              redirect={"/view-bill"}
            />
            </div>
          </div>
          <div className="column-profileCard">
            <div className="profileCard-container">
            <CompanyCard
              name="VIVO"
              imageProfile="https://planosvivointernet.com.br/OPENGRAPH-VIVO.png"
              redirect={"/view-bill"}
            />
            </div>
          </div>
          <div className="column-profileCard">
            <div className="profileCard-container">
            <CompanyCard
              name="VIVO"
              imageProfile="https://media-exp1.licdn.com/dms/image/C560BAQG9HLeVVkel6w/company-logo_200_200/0/1641309003007?e=2147483647&v=beta&t=ZBE0ncADklbvj7FeRI0OS5yQrXhb3HpQpJ5fmeaJdY4"
              redirect={"/view-bill"}
            />
            </div>
          </div>
          <div className="column-profileCard">
            <div className="profileCard-container">
            <CompanyCard
              name="VIVO"
              imageProfile="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjgwSsEoDU2eYFG_-c7dvSt_4By4Ij81VUA&usqp=CAU"
              redirect={"/view-bill"}
            />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeUser;
