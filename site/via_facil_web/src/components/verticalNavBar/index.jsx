import "./verticalNavBar.css";
import { useState, useEffect } from "react";
import { VerticalMenuItems } from "./VerticalMenuItems";
import AuthService from "../../services/auth.service";
import CustomerService from "../../services/customer.service";

const VerticalNavBar = ({ onClick }) => {
  const [state, setState] = useState({ clicked: false });

  const logout = () => {
    AuthService.logout();
  };

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const customer = AuthService.getCurrentUser();

  const [content, setContent] = useState("");

  useEffect(() => {
    CustomerService.getAll().then(
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
  }, []);

  return (
    <div className="nav-bar-vertical">
      <div className={state.clicked ? "sidebar active" : "sidebar"}>
        <div className="logo_content">
          <div className="logo">
            <div className="logo_name">Menu</div>
          </div>
          <div className="vertical-menu-icon">
            <i
              onClick={onClick}
              onClickCapture={handleClick}
              className={state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
        <ul>
          <li>
            <i
              onClick={onClick}
              onClickCapture={handleClick}
              className="fas fa-search"
            ></i>
            <input type="text" placeholder="Search..." />
          </li>
          {VerticalMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  <i className={item.icon}></i>
                  <span className="links_name">{item.title}</span>
                </a>
                <span className="tooltip">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div className="profile_content">
          <div className="profile">
            <div className="profile_details">
              <img src={customer.urlPhoto} alt="Foto do usuário" />
              <div className="name_job">
                <div className="name">{customer.name}</div>
              </div>
            </div>
            <a
              href="/"
              onClick={logout}
              className="fas fa-sign-out-alt"
              id="log_out"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalNavBar;
