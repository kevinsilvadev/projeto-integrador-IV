import "../../App.css";
import Footer from "../footer";
import NavBar from "../navBar";
import ProfileCard from "../profileCard";

export default function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="section-aboutUs">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
      </div>
      <div className="AboutUs-Content">
        <h1 className="AboutUs-Title">Nossa equipe</h1>
        <div className="row-profileCard">
          <div className="column-profileCard">
            <div className="profileCard-container">
              <ProfileCard
                name="Elias Fausto"
                profession="Web Developer"
                imageProfile="https://github.com/Elias-FS.png"
                linkGithub="https://github.com/Elias-FS"
                linkInstagram=""
                linkLinkedin="https://www.linkedin.com/in/elias-fausto-de-souza/"
              />
            </div>
          </div>
          <div className="column-profileCard">
            <div className="profileCard-container">
              <ProfileCard
                name="Emilo Biasi"
                profession="Web Developer"
                imageProfile="https://github.com/emiliobiasi.png"
                linkGithub="https://github.com/emiliobiasi"
                linkInstagram=""
                linkLinkedin="https://www.linkedin.com/in/elias-fausto-de-souza/"
              />
            </div>
          </div>
          <div className="column-profileCard">
            <div className="profileCard-container">
              <ProfileCard
                name="Kevin Silva"
                profession="Web Developer"
                imageProfile="https://github.com/kevinsilvadev.png"
                linkGithub="https://github.com/kevinsilvadev"
                linkInstagram=""
                linkLinkedin="https://www.linkedin.com/in/elias-fausto-de-souza/"
              />
            </div>
          </div>
          <div className="column-profileCard">
            <div className="profileCard-container">
              <ProfileCard
                name="Gian Dutra"
                profession="Web Developer"
                imageProfile="https://github.com/GianDutra.png"
                linkGithub="https://github.com/GianDutra"
                linkInstagram=""
                linkLinkedin="https://www.linkedin.com/in/elias-fausto-de-souza/"
              />
            </div>
          </div>
          <div className="column-profileCard">
            <div className="profileCard-container">
              <ProfileCard
                name="Thiago Santos"
                profession="Web Developer"
                imageProfile="https://github.com/ThiagoSantos21.png"
                linkGithub="https://github.com/ThiagoSantos21"
                linkInstagram=""
                linkLinkedin="https://www.linkedin.com/in/elias-fausto-de-souza/"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
