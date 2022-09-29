import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <a href="#">Sobre</a>
            <a href="#">Sobre</a>
            <a href="#">Sobre</a>
            <a href="#">Sobre</a>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <a href="#">Contato</a>
            <a href="#">Contato</a>
            <a href="#">Contato</a>
            <a href="#">Contato</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <a href="#">Videos</a>
            <a href="#">Videos</a>
            <a href="#">Videos</a>
            <a href="#">Videos</a>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a href="#">Mídias</a>
            <a href="#">Mídias</a>
            <a href="#">Mídias</a>
            <a href="#">Mídias</a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <a to="/" className="social-logo">
              LOGO
              <i class="fab fa-typo3" />
            </a>
          </div>
          <small class="website-rights">LOGO © 2022</small>
          <div class="social-icons">
            <i class="fab fa-facebook-f" />

            <i class="fab fa-instagram" />

            <i class="fab fa-youtube" />

            <i class="fab fa-twitter" />

            <i class="fab fa-linkedin" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
