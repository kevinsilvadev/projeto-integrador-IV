import React from "react";
import "./Keychain.css";

const Keychain = ({ name, imageUrl }) => {
  return (
    <div className="keychain-container-glass">
      <div className="flip-card">
        <h1>Seu chaveiro</h1>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="keychain-hole"></div>
            <h2>Emissor de Segunda via</h2>
            <h3>Via fácil</h3>
            <img
              src={imageUrl}
              alt="Foto do usuário"
            />
            <h4>{name}</h4>
          </div>
          <div className="flip-card-back">
            <div className="keychain-hole"></div>
            <img
              src="https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
              alt="Foto do usuário"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keychain;
