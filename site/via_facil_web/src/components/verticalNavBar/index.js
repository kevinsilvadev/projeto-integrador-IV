import "./verticalNavBar.css";
import { useState } from "react";
import { VerticalMenuItems } from "./VerticalMenuItems";

const VerticalNavBar = () => {

  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  

  return (
    <div className="nav-bar-vertical">
      <div className={state.clicked ? "sidebar active" : "sidebar"}>
        <div className="logo_content">
          <div className="logo">
            <i className="fab fa-react"></i>
            <div className="logo_name">Via Facil</div>
          </div>
          <div className="vertical-menu-icon">
            <i
              onClick={handleClick}
              className={state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </div>
        <ul>
          <li>
            <i className="fas fa-search"></i>
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
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Foto do usuário"
              />
              <div className="name_job">
                <div className="name">Nome</div>
                <div className="job">Web developer</div>
              </div>
            </div>
            <i className="fas fa-sign-out-alt" id="log_out"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalNavBar;
