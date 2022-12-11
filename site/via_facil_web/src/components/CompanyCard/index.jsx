import './CompanyCard.css'

const CompanyCard = ({
  name,
  imageProfile,
  redirect
}) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={imageProfile} alt="" />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <div className="social-links">
        <form action={redirect}>
            <button className="companyBill-button">Boletos</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
