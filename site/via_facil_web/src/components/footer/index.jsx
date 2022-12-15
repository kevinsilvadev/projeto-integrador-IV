import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre nós</h2>
            <a href="/about-us">Equipe</a>
            <a href="#">História</a>
            <a href="#">Notícias</a>
            <a href="#">Carreiras</a>
          </div>
          <div className="footer-link-items">
            <h2>Suporte</h2>
            <a href="#">Fale Conosco</a>
            <a href="#">Email</a>
            <a href="#">Comunidade</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a href="#">Avaliaçoes dos usuários</a>
            <a href="#">Avaliações de parceiros</a>
            <a href="#">Introdução ao nosso sistema</a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="#">
              <i className="fab fa-facebook-f" /> Facebook
            </a>
            <a href="#">
              <i className="fab fa-instagram" /> Instagram
            </a>
            <a href="#">
              <i className="fab fa-youtube" /> Youtube
            </a>
            <a href="#">
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <a to="/" className="social-logo">
              Via Fácil
            </a>
          </div>
          <small className="website-rights">Via Fácil © 2022</small>
        </div>
      </section>
    </div>
  );
};

export default Footer;
