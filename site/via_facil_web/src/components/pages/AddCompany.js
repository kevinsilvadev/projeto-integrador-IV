import VerticalNavBar from "../verticalNavBar";
import "../../App.css";
import { useState } from "react";
import CardParcerias from "../card_parcerias";
import Parcerias from "../parcerias";

function HomeUser() {
  const [state, setState] = useState({ clicked: false });

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
                  link={"https://www.sky.com.br/"}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://seeklogo.com/images/C/CPFL_Energia-logo-9641BA2E64-seeklogo.com.png"
                  link={"https://www.cpfl.com.br/"}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://atualizo.com.br/wp-content/uploads/2019/09/SANASA-LOGO-300x200.png"
                  link={"https://www.sanasa.com.br/inicio/default.aspx"}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://www.puc-campinas.edu.br/wp-content/uploads/2022/06/logo-puc.png"
                  link={
                    "https://login.sis.puc-campinas.edu.br/login?logout&layoutEnvLabel="
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/56e2ec480bef623ab7cb99c7ba670617-1024x659.jpg"
                  link={
                    "https://www.unimed.coop.br/site/segunda-via-de-boletos"
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://rocketworks.solutions/assets/img/custom-rocket/clientes/pignet.jpg"
                  link={"https://portal.pignet.com.br/auth/login"}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://2.bp.blogspot.com/-K1_D0PEZYaI/XLRe8RWKoBI/AAAAAAAAHSg/PK-WXwI9lDc0gTCxlJQJpztc-hK_DycygCLcBGAs/s1600/VIV-web-logo.png"
                  link={
                    "https://www.vivo.com.br/para-voce/ajuda/minha-fatura/2-via-de-fatura"
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://1000marcas.net/wp-content/uploads/2021/02/Claro-Logo.png"
                  link={"https://www.claro.com.br/atendimento/2-via-de-conta"}
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://logosmarcas.net/wp-content/uploads/2021/03/TIM-Logo-1999-2004.jpg"
                  link={
                    "http://meutim.tim.com.br/novo/login/checkmsisdn?bmctx=8B94D49C137CCFE1FA9512A461AC79DB4FBA69EFB5FA39109654FE9A6E39100A&contextType=external&username=string&enablePersistentLogin=true&contextValue=%2Foam&password=secure_string&challenge_url=https%3A%2F%2Fmeutim.tim.com.br%2Fnovo%2Flogin&request_id=564378484209404409&authn_try_count=0&locale=pt_BR&resource_url=https%253A%252F%252Fmeutim.tim.com.br%252F%253Futm_campaign%253Dsitedl-estimulo-app-home-2-via-conta-site-tim%2526utm_medium%253Dsitedl%2526utm_source%253Dbtl"
                  }
                />
              </div>
            </div>
            <div className="column">
              <div className="parcerias-container">
                <CardParcerias
                  imageUrl="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
                  link={
                    "https://www.netflix.com/br/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount"
                  }
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
