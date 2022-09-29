import Card from "../card";
import "./Vantagens.css";

const Vantagens = () => {
  return (
    <div className="section-vantagens">
      <h1 className="title">Vantagens</h1>
      <div className="vantagens-container">
        <Card
          title="Facilidade"
          imageUrl="https://img.elo7.com.br/product/original/3249FFD/quadro-decorativo-natureza-paisagem-mar-sol-coqueiro-ponte-quadro-belezas-naturais.jpg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet.!"
        />
        <Card
          title="Card Title"
          imageUrl="https://img.elo7.com.br/product/original/3249FFD/quadro-decorativo-natureza-paisagem-mar-sol-coqueiro-ponte-quadro-belezas-naturais.jpg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
        />
        <Card
          title="Card Title"
          imageUrl="https://img.elo7.com.br/product/original/3249FFD/quadro-decorativo-natureza-paisagem-mar-sol-coqueiro-ponte-quadro-belezas-naturais.jpg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  );
};

export default Vantagens;
