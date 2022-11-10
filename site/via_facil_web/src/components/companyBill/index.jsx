import "./CompanyBill.css";

const CompanyBill = ({img, name}) => {
  return (
    <div>
      <div className="companyBill-container">
        <div className="item2">
          <div className="companyBill-img">
            <img
              src={img}
              alt="Foto da empresa"
            />
          </div>
        </div>
        <div className="item3"><p>{name}</p></div>
        <div className="item4">
          <button className="companyBill-button">Boletos</button>
        </div>
      </div>
    </div>
  );
};

export default CompanyBill;
