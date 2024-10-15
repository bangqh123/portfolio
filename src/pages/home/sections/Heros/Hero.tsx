import "./Hero.scss";
import "./Hero.media.scss";

import React from "react";
import { IMAGES } from "../../../../assets/images";
import { ICONS } from "../../../../assets/icons";
import ButtonText from "../../../../components/buttons/ButtonText/ButtonText";

const Hero: React.FC = () => {
  return (
    <>
      <div id="hero" className="hero">
        <div className="hero-content">
          <h1>
            Hello!
            <img src={ICONS.HI} alt="Icon Hi" />
          </h1>
          <h3>
            My name is <strong>Quach Hai Bang</strong>
          </h3>
          <p>
            I am a Front-End and Website developer with over 1 year of experience.
          </p>
          <ButtonText title="Contact Me" className="c" />
        </div>
        <div className="hero-img">
          <img src={IMAGES.HERO} alt="Ảnh tốt nghiệp" />
        </div>
      </div>
    </>
    
  );
};

export default Hero;
