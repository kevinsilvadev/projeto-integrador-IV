import React from "react";
import { Button } from "../button";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      <div className="heroSection">
        <h1>
          Via <span>Fácil</span>
        </h1>
        <p>
          Faça a emissão da sua segunda via com maior facilidade e segurança com
          a VIA FÁCIL Sem mais burocrácias e demoras
        </p>
        <form action="/sign-up">
          <Button>Comece já</Button>
        </form>
      </div>
    </>
  );
};

export default HeroSection;
