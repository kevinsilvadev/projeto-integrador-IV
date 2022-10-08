import "./CompanyCardComponent.css";

const CompanyCardComponent = ({ title, imageUrl, body }) => {
  return (
    <div className="mini-card-company-component">
      <a href="#">
        <div className="content-company-card-component">
          <div className="image-company-card-component">
            <img src={imageUrl} alt="" />
          </div>
          <h3>{title}</h3>
          <span class="price">{body}</span>
        </div>
      </a>
    </div>
  );
};

export default CompanyCardComponent;
