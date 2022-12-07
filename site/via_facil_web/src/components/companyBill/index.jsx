import "./CompanyBill.css";

const CompanyBill = ({ img, name, redirect }) => {
  return (
    <div>
      <div className="companyBill-container">
        <div className="item2">
          <div className="companyBill-img">
            <img src={img} alt="Foto da empresa" />
          </div>
        </div>
        <div className="item3">
          <p>{name}</p>
        </div>
        <div className="item4">
          <form action={redirect}>
            <button className="companyBill-button">Boletos</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyBill;
