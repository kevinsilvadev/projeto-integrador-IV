import "./CardParcerias.css";

const CardParcerias = ({ imageUrl, onClick }) => {
  return (
    <div className="container-card-parcerias">
      <div className="image-container2">
        <img onClick={onClick} src={imageUrl} alt="" />
      </div>
    </div>
  );
};

export default CardParcerias;
