import "./CardParcerias.css";

const CardParcerias = ({ imageUrl }) => {
  return (
    <div className="container-card-parcerias">
      <div className="image-container2">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default CardParcerias;
