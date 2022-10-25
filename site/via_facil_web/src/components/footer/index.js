import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="#">Sobre</a>
            <a href="#">Sobre</a>
            <a href="#">Sobre</a>
            <a href="#">Sobre</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a href="#">Contato</a>
            <a href="#">Contato</a>
            <a href="#">Contato</a>
            <a href="#">Contato</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a href="#">Videos</a>
            <a href="#">Videos</a>
            <a href="#">Videos</a>
            <a href="#">Videos</a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="#">Mídias</a>
            <a href="#">Mídias</a>
            <a href="#">Mídias</a>
            <a href="#">Mídias</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a to="/" className="social-logo">
              LOGO
              <i className="fab fa-typo3" />
            </a>
          </div>
          <small className="website-rights">LOGO © 2022</small>
          <div className="social-icons">
            <i className="fab fa-facebook-f" />

            <i className="fab fa-instagram" />

            <i className="fab fa-youtube" />

            <i className="fab fa-twitter" />

            <i className="fab fa-linkedin" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
