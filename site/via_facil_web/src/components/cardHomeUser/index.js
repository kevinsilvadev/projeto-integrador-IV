import CompanyCardComponent from "../companyCardComponent";
import "./CardHomeUser.css";

const CardHomeUser = ({ title }) => {
  return (
    <div className="card-container-home-user">
      <div className="card-content-home-user">
        <div className="card-title-home-user">
          <h3>{title}</h3>
        </div>
        <div class="divider div-transparent"></div>
        <ul className="card-body-home-user">
          <CompanyCardComponent
            title={"Youtube"}
            body={777}
            imageUrl="https://cdn-icons-png.flaticon.com/512/3798/3798317.png"
          />
          <CompanyCardComponent
            title={"Youtube"}
            body={777}
            imageUrl="https://cdn-icons-png.flaticon.com/512/3798/3798317.png"
          />
          <CompanyCardComponent
            title={"Youtube"}
            body={777}
            imageUrl="https://cdn-icons-png.flaticon.com/512/3798/3798317.png"
          />
          <CompanyCardComponent
            title={"Youtube"}
            body={777}
            imageUrl="https://cdn-icons-png.flaticon.com/512/3798/3798317.png"
          />
        </ul>
      </div>
    </div>
  );
};

export default CardHomeUser;
