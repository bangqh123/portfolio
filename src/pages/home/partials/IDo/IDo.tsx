import "./IDo.scss";
import "./IDo.media.scss";

import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import { blueTheme } from "../../../../styles/theme";

import DesignImg from "./SVG/designImg";
import BackEndImg from "./SVG/backendImg";
import FrontEndImg from "./SVG/frontendImg";
import { ICONS } from "../../../../assets/icons";

type TIDoProps = {
  title: string;
};

interface TIDo {
  title: string;
  fileName: string;
  icons: TIDoIcon[];
  desc: string[];
}

interface TIDoIcon {
  name: string;
  icon: string;
}

const IDo: React.FC<TIDoProps> = ({ title }) => {
  const [isData, setIsData] = useState<TIDo[]>([]);
  const [isAnimation, setIsAnimation] = useState(false); // Array of booleans
  const { userInfo } = useSelector((state: RootState) => state.portfolio);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  const GetSkillSvg = ({ fileName }: { fileName: string }) => {
    if (fileName === "BackEndImg") return <BackEndImg theme={blueTheme} />;
    else if (fileName === "FrontEndImg") return <FrontEndImg theme={blueTheme} />;
    return <DesignImg theme={blueTheme} />;
  };

  useEffect(() => {
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / docHeight;

        setIsAnimation(scrollFraction >= 0.26);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (userInfo?.[0]?.whatido) {
      setIsData(userInfo[0].whatido);
    }
  }, [userInfo]);

  return (
    <div className="what">
      <h1 className="what-title">{title}</h1>
      <div className="what-group">
        {isData?.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el!)}
            className={`what-group-item ${isAnimation ? "animation" : ""}`}
          >
            <div className="item-img">
              <GetSkillSvg fileName={item.fileName} />
            </div>
            <div className="item-content">
              <h3 className="item-content-title">{item.title}</h3>
              <div className="item-content-icons">
                {item?.icons?.map((iconData, i) => {
                  const IconComponent = iconData.icon;
                  return (
                    <div key={i} className="icon">
                      <img src={IconComponent} alt={iconData.name} />
                      <span>{iconData.name}</span>
                    </div>
                  );
                })}
              </div>
              <div className="item-content-desc">
                {item.desc.map((description, id) => (
                  <div className="desc-item" key={id}>
                    <img src={ICONS.LIGHTNING} alt="" />
                    <p>{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IDo;
