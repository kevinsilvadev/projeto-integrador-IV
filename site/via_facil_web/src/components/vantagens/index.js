import Card from "../card";
import "./Vantagens.css";

const Vantagens = () => {
  return (
    <div className="section-vantagens">
      <h1 className="title">Vantagens</h1>
      <div className="vantagens-container">
        <Card
          title="Facilidade"
          imageUrl="https://cdn-icons-png.flaticon.com/512/3798/3798317.png"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet.!"
        />
        <Card
          title="Compatibilidade"
          imageUrl="https://static.vecteezy.com/system/resources/thumbnails/003/484/753/small/simple-electronic-device-icons-tablet-mobile-desktop-free-vector.jpg"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
        />
        <Card
          title="Segurança"
          imageUrl="https://cdn-icons-png.flaticon.com/512/159/159448.png"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  );
};

export default Vantagens;
