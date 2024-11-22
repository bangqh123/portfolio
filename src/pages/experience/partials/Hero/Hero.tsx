import "./Hero.scss"
import "./Hero.media.scss"

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import { blueTheme } from "../../../../styles/theme";
import HeroImg from "./heroimg";

type THeroProps = {
    title: string,
    desc: string,
}

interface THero {
    desc: string;
}

const Hero: React.FC<THeroProps> = ({ title, desc }) => {
    const [isData, setIsData] = useState<THero>();

    const { experienceInfo } = useSelector((state: RootState) => state.experience);

    useEffect(() => {
        setIsData(experienceInfo?.hero);
    }, [experienceInfo]);

    return (
        <div className="experiencehero">
            <div className="experiencehero-img">
                <HeroImg theme={blueTheme} />
            </div>
            <div className="experiencehero-content">
                <h1 className="experiencehero-content-title">{title}</h1>
                <h3 className="experiencehero-content-desc">
                    {desc}
                </h3>
                <p>{isData?.desc}</p>
            </div>
        </div>
    )
}

export default Hero;
