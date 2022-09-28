import CardParcerias from "../card_parcerias";
import "./Parcerias.css";

const Parcerias = () => {
  return (
    <div className="sections-parcerias">
      <h1>Parcerias</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{" "}
      </p>
      <div className="parcerias-container">
        <CardParcerias imageUrl="https://img.elo7.com.br/product/original/3249FFD/quadro-decorativo-natureza-paisagem-mar-sol-coqueiro-ponte-quadro-belezas-naturais.jpg" />
        <CardParcerias imageUrl="https://img.elo7.com.br/product/original/3249FFD/quadro-decorativo-natureza-paisagem-mar-sol-coqueiro-ponte-quadro-belezas-naturais.jpg" />
        <CardParcerias imageUrl="https://img.elo7.com.br/product/original/3249FFD/quadro-decorativo-natureza-paisagem-mar-sol-coqueiro-ponte-quadro-belezas-naturais.jpg" />
      </div>
    </div>
  );
};

export default Parcerias;
