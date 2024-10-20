import "./Hero.scss";
import "./Hero.media.scss";

import React from "react";
import { IMAGES } from "../../../../assets/images";
import { ICONS } from "../../../../assets/icons";
import Button from "../../../../components/buttons/ButtonText/ButtonText";

type THeroProps = {
  title: string;
  name: string;
  description: string;
};

const Hero: React.FC<THeroProps> = ({ title, name, description }) => {
  return (
    <>
      <div id="hero" className="hero">
        <div className="hero-content">
          <h1>
            {title}
            <img src={ICONS.HI} alt="Icon Hi" />
          </h1>
          <h3 dangerouslySetInnerHTML={{ __html: name }} />
          <p>{description}</p>
          <Button title="Contact Me" className="hero-content-btn" />
        </div>
        <div className="hero-img">
          <img src={IMAGES.HERO} alt="Ảnh tốt nghiệp" />
        </div>
      </div>
    </>
  );
};

export default Hero;
