import "./ProfileCard.css";

const ProfileCard = ({
  name,
  profession,
  imageProfile,
  linkGithub,
  linkLinkedin,
  linkInstagram,
}) => {
  return (
    <div className="profile-card">
      <div className="img">
        <img src={imageProfile} alt="" />
      </div>
      <div className="caption">
        <h3>{name}</h3>
        <p>{profession}</p>
        <div className="social-links">
          <a href={linkInstagram}>
            <i className="fab fa-instagram" />
          </a>
          <a href={linkGithub}>
            <i className="fab fa-github" />
          </a>
          <a href={linkLinkedin}>
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
