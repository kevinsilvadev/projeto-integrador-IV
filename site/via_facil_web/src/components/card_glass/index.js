import "./CardGlass.css";

const CardGlass = ({ title, imageUrl, body }) => {
  return (
    <div className="card-container-glass">
      <div className="card-content-glass">
        <div className="card-title-glass">
          <h3 className="title-glass">{title}</h3>
        </div>
        <div className="card-body-glass">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default CardGlass;
