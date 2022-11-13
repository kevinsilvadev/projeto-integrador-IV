import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import { useState, useEffect } from "react";
import CardParcerias from "../card_parcerias";
import Parcerias from "../parcerias";
import Modal from "../modal";
import CompanyService from "../../services/company.service"
function HomeUser() {
  const [state, setState] = useState({ clicked: false });
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  const [content, setContent] = useState("");
  
  useEffect(() => {
    CompanyService.getCompanies().then(
      (response) => {
        setContent(response.data)
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

  function renderCompanies(){
    let ret = [];
    for(let i = 0; i < content.length; i++){
      ret.push(
        <li className="column">
          <div className="parcerias-container">
            <CardParcerias
              imageUrl={content[i].imgLogo}
              onClick={() => setOpenModal(true)}
            />
          </div>
        </li>
      )
    }
    return ret
  }
  
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
          <ul className="row">
            {renderCompanies()} 
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomeUser;
