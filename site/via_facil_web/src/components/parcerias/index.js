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
          <CardParcerias imageUrl="data:image/png;base64,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" />
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
