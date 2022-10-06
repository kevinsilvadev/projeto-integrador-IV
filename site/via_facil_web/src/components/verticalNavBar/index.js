import './verticalNavBar.css'
import { useState } from 'react';
import { Button } from '../button';
import { VerticalMenuItems } from './VerticalMenuItems'

const VerticalNavBar = () => {
  const [state, setState] = useState({ clicked: false });

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  return (
    <div className='nav-bar-vertical'>
    <div className="sidebar">
      <div className="logo_content">
        <h1 className="logo">
          <i className="fab fa-react"></i>
          <div className="logo_name">Via Facil</div>
        </h1>
      </div>
      <div className="vertical-menu-icon" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.clicked ? "vertical-nav-menu active" : "vertical-nav-menu"}>
        {VerticalMenuItems.map((item, index) => {
          return (
            <li key={index}>
              <i className={item.icon}></i>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Foto do usuário" />
          </div>
          <div className="name_job">
            <div className="name">Nome</div>
            <div className="job">Web developer</div>
          </div>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
      <Button>Login</Button>
    </div>
    </div>
  )
}

export default VerticalNavBar