import "./Hero.scss";
import "./Hero.media.scss";

import React from "react";
import { IMAGES } from "../../../../assets/images";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div id="particles-js"></div>
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>Your description goes here.</p>
      </div>
      <div className="hero-img">
        <img src={IMAGES.HERO} alt="Anh tot nghiep" />
      </div>
    </div>
  );
};

export default Hero;
