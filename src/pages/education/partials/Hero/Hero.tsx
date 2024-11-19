import "./Hero.scss";
import "./Hero.media.scss";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import { blueTheme } from "../../../../styles/theme";
import HeroImg from "./heroimg";

type THeroProps = {
  title: string;
};

interface THero {
  desc: string;
  icons: {
    icon: string;
    name: string;
    link: string;
  }[];
}

const Hero: React.FC<THeroProps> = ({ title }) => {
  const [isData, setIsData] = useState<THero>();

  const { educationInfo } = useSelector((state: RootState) => state.education);

  useEffect(() => {
    setIsData(educationInfo?.hero);
  }, [educationInfo]);

  return (
    <div className="educationhero">
      <div className="contacthero-img">
        <HeroImg theme={blueTheme} />
      </div>
      <div className="contacthero-content">
        <h1 className="contacthero-content-title">{title}</h1>
        <p className="contacthero-content-desc">{isData?.desc}</p>
        <div className="contacthero-content-icons">
          {isData?.icons?.map((iconData, i) => {
            const IconComponent = iconData.icon;
            return (
              <div key={i} className="icon">
                <img src={IconComponent} alt={iconData.name} />
                <span>{iconData.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
