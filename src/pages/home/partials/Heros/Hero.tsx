import "./Hero.scss";
import "./Hero.media.scss";

import React from "react";
import { ICONS } from "../../../../assets/icons";
import Button from "../../../../components/buttons/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

type THeroProps = {
  title: string;
  name: string;
  description: string;
};

const Hero: React.FC<THeroProps> = ({ title, name, description }) => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <div id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-content-title">
            {title}
            <img src={ICONS.HI} alt="Icon Hi" />
          </h1>
          <h3 dangerouslySetInnerHTML={{ __html: name }} />
          <p>{description}</p>
          <Button
            title="Contact Me"
            className="hero-content-btn"
            onClick={handleContact}
          />
        </div>
        <div className="hero-img">
          <img src="http://localhost:1337/uploads/hero_3c510a4f35.PNG" alt="Avatar Profolio" />
        </div>
      </div>
    </>
  );
};

export default Hero;
