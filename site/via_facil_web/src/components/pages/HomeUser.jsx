import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import CalendarDate from "../calendar";
import { useEffect, useState } from "react";
import Insights from "../insights";
import RecentOrder from "../recentOrder";
import api from "../../services/api";
import AuthService from "../../services/auth.service";
import CompanyService from "../../services/company.service";
import CompanyBill from "../companyBill";
import CustomerService from "../../services/customer.service";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

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
      className={state.clicked ? "HomeUser_content active" : "HomeUser_content"}
    >
      <div className="homeUser-header">
        <h1>Dashboard</h1>
      </div>

      <div className="homeUser-row">
        <VerticalNavBar onClick={handleClick} />
        <div className="col-9 col-s-12">
          <CalendarDate />
          <div className="grid-container">
            <Insights
              type={"sales"}
              title={"Total Sales"}
              percentage={"81"}
              value={"2500,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
            <Insights
              type={"expenses"}
              title={"Total Expenses"}
              percentage={"62"}
              value={"1200,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
            <Insights
              type={"income"}
              title={"Total Income"}
              percentage={"44"}
              value={"2250,00"}
              icon={<i className="fas fa-chart-bar"></i>}
            />
          </div>
          <div className="homeUser-recentOrder">
            <RecentOrder />
          </div>
        </div>

        <div className="col-3 col-s-12">
          <div className="homeUser-aside">{renderLinkedCompanies()}</div>
        </div>
      </div>

      <div className="homeUser-footer">
        <p>
          Resize the browser window to see how the content respond to the
          resizing.
        </p>
      </div>
    </div>
  );
}

export default HomeUser;
