import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import { useState, useEffect } from "react";
import CardParcerias from "../card_parcerias";
import Parcerias from "../parcerias";
import Modal from "../modalAddCompany";
import CompanyService from "../../services/company.service"
import api from "../../services/api"
import AuthService from "../../services/auth.service";
import ModalAddCompany from "../modalAddCompany";


function HomeUser() {
  const [state, setState] = useState({ clicked: false });
  const [openModal, setOpenModal] = useState(false);
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");


  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };

  console.log(AuthService.getCurrentUser());


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

  const click = (i) => {

   
  }


  function renderCompanies(){
    let ret = [];
    for(let i = 0; i < content.length; i++){
      ret.push(
        <li className="column">
          <div className="parcerias-container">
            <CardParcerias
              imageUrl={content[i].imgLogo}
              onClick={() => {
                setOpenModal(true)
                const customer = AuthService.getCurrentUser();             
                api
                  .post(`http://localhost:8080/api/auth/addCompany?companyCnpj=${content[i].cnpj}&customerCpf=${customer.username}`)
                  .catch((error) => {
                    const resMessage =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
                  if (error.response.data.message) {
                      alert(error.response.data.message)
                  }
                })
              }}
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
        <video src="/videos/video-3.mp4" autoPlay loop muted />
        <ModalAddCompany open={openModal} onClose={() => setOpenModal(false)} />
        <div className="addCompany_VerticalNavBar">
          <VerticalNavBar onClick={handleClick} />
        </div>
        <div className="title-add-company">
          <h1>Empresas que você talvez seja cliente</h1>
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
