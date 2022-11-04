import "./CardParcerias.css";

const CardParcerias = ({ imageUrl, link }) => {
  return (
    <div className="container-card-parcerias">
      <div className="image-container2">
        <img src={imageUrl} alt="" />
        <a href={link} target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  );
};

export default CardParcerias;
