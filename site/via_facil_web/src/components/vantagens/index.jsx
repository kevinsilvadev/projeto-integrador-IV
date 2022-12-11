import Card from "../card";
import "./Vantagens.css";

const Vantagens = () => {
  return (
    <div id="section1" className="section-vantagens">
      <h1 className="title">Vantagens</h1>
      <div className="vantagens-container">
        <Card
          title="Facilidade"
          imageUrl="https://cdn-icons-png.flaticon.com/512/3798/3798317.png"
          body="O nosso sistema facilita a geração de segundas vias disponibilizando suas contas de forma rápida e segura."
        />
        <Card
          title="Compatibilidade"
          imageUrl="https://static.vecteezy.com/system/resources/thumbnails/003/484/753/small/simple-electronic-device-icons-tablet-mobile-desktop-free-vector.jpg"
          body="A versatilidade do nosso sistema foi pensando para que seja acessível para diversos aparelhos, entregando assim uma alta responsividade para o mercado atual."
        />
        <Card
          title="Segurança"
          imageUrl="https://cdn-icons-png.flaticon.com/512/159/159448.png"
          body="A segurança é um ponto muito importante em relação aos nossos dados pessoais, pensando nisso investimos muito para que os seus dados estejam sempre protegidos."
        />
      </div>
    </div>
  );
};

export default Vantagens;
