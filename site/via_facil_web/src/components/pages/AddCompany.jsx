import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import { useState } from "react";
import CardParcerias from "../card_parcerias";
import Parcerias from "../parcerias";
import Modal from "../modal";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  return (
    <>
      <div
        className={
          state.clicked ? "addCompany_content active" : "addCompany_content"
        }
      >
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
        <div className="addCompany_VerticalNavBar">
          <VerticalNavBar onClick={handleClick} />
        </div>
        <div className="title-add-company">
          <h1>Empresas disponíveis</h1>
        </div>
        <div className="title-add-company">
          <h2>Clique em uma empresa para realizar um cadastro único.</h2>
        </div>
        <div className="formCompany">
          <div className="row">
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://www.tvmagazine.com.br/imagens/icones/600/sky.png"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://seeklogo.com/images/C/CPFL_Energia-logo-9641BA2E64-seeklogo.com.png"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://atualizo.com.br/wp-content/uploads/2019/09/SANASA-LOGO-300x200.png"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://www.puc-campinas.edu.br/wp-content/uploads/2022/06/logo-puc.png"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/56e2ec480bef623ab7cb99c7ba670617-1024x659.jpg"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://rocketworks.solutions/assets/img/custom-rocket/clientes/pignet.jpg"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://2.bp.blogspot.com/-K1_D0PEZYaI/XLRe8RWKoBI/AAAAAAAAHSg/PK-WXwI9lDc0gTCxlJQJpztc-hK_DycygCLcBGAs/s1600/VIV-web-logo.png"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://1000marcas.net/wp-content/uploads/2021/02/Claro-Logo.png"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://logosmarcas.net/wp-content/uploads/2021/03/TIM-Logo-1999-2004.jpg"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                  onClick={() => setOpenModal(true)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeUser;
