import "./Hero.scss";
import "./Hero.media.scss";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import SocailButton from "../../../../components/buttons/SocialButtonGroup/SocialButtonGroup";
import Button from "../../../../components/buttons/Buttons/Buttons";

type THeroProps = {
  contact: string;
};

interface THero {
  img: string;
  alt: string;
  desc: string;
  icons: TIcon[];
  resume: string;
}

interface TIcon {
  icon: string;
  color: string;
  link: string;
}

const Hero: React.FC<THeroProps> = ({ contact }) => {
  const [isData, setIsData] = useState<THero>();

  const { contactInfo } = useSelector((state: RootState) => state.contact);

  useEffect(() => {
    setIsData(contactInfo?.hero);
  }, [contactInfo]);

  return (
    <div className="contacthero">
      <div className="contacthero-img">
        <img src={isData?.img} alt={isData?.alt} />
      </div>
      <div className="contacthero-content">
        <h1 className="contacthero-content-title">{contact}</h1>
        <p className="contacthero-content-desc">{isData?.desc}</p>
        <SocailButton
          classname="contacthero-content-btn"
          data={isData?.icons}
        />
        <Button
          newTab={true}
          title="See My Resume"
          link={isData?.resume}
          className="contacthero-content-resume"
        />
      </div>
    </div>
  );
};

export default Hero;
