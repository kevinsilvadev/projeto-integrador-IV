import CardParcerias from "../card_parcerias";
import "./Parcerias.css";

const Parcerias = () => {
  return (
    <div className="row">
      <div className="column1">
        <h1>Parcerias</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://www.tvmagazine.com.br/imagens/icones/600/sky.png" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://seeklogo.com/images/C/CPFL_Energia-logo-9641BA2E64-seeklogo.com.png" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://atualizo.com.br/wp-content/uploads/2019/09/SANASA-LOGO-300x200.png" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://www.puc-campinas.edu.br/wp-content/uploads/2022/06/logo-puc.png" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://www.valordeplanosdesaude.com.br/wp-content/uploads/2018/05/56e2ec480bef623ab7cb99c7ba670617-1024x659.jpg" />
        </div>
      </div>
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://rocketworks.solutions/assets/img/custom-rocket/clientes/pignet.jpg" />
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
      <div className="column">
        <div className="parcerias-container">
          <CardParcerias imageUrl="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456" />
        </div>
      </div>
    </div>
  );
};

export default Parcerias;
