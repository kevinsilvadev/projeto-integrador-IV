import CardParcerias from "../card_parcerias";
import "./Parcerias.css";

const Parcerias = () => {
  return (
    <div id="section2" className="row">
      <div className="column1">
        <h1>Parcerias Premium</h1>
        <p>
          Grandes empresas confiam em nosso sistema, ao lado estão as empresas PREMIUM 
          que emitem mais segundas vias facilitando a vida de milhares de brasileiros na emissão de suas contas!
        </p>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://www.tvmagazine.com.br/imagens/icones/600/sky.png" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/56e2ec480bef623ab7cb99c7ba670617-1024x659.jpg" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://2.bp.blogspot.com/-K1_D0PEZYaI/XLRe8RWKoBI/AAAAAAAAHSg/PK-WXwI9lDc0gTCxlJQJpztc-hK_DycygCLcBGAs/s1600/VIV-web-logo.png" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://1000marcas.net/wp-content/uploads/2021/02/Claro-Logo.png" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://logosmarcas.net/wp-content/uploads/2021/03/TIM-Logo-1999-2004.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Parcerias;
