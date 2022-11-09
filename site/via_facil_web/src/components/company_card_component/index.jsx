import "./CompanyCardComponent.css";

const CompanyCardComponent = ({ title, imageUrl }) => {
  return (
    <div className="mini-card-company-component">
      <a className="company-link" href="#">
        <div className="content-company-card-component">
          <div className="image-company-card-component">
            <img className="company-image" src={imageUrl} alt="" />
          </div>
          <h3 className="company-name">{title}</h3>
          <p>Ver</p>
        </div>
      </a>
    </div>
  );
};

export default CompanyCardComponent;
