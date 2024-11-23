import "./Hero.scss"
import "./Hero.media.scss"

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store/store";
import { blueTheme } from "../../../../styles/theme";
import HeroImg from "./heroimg";

type THeroProps = {
    title: string;
};

interface THero {
    desc: string;
}

const Hero: React.FC<THeroProps> = ({ title }) => {
    const [isData, setIsData] = useState<THero>();

    const { projectInfo } = useSelector(
        (state: RootState) => state.project
    );
    
    useEffect(() => {
        setIsData(projectInfo?.hero);
    }, [projectInfo]);

    return (
        <div className="projecthero">
            <div className="projecthero-img">
                <HeroImg theme={blueTheme} />
            </div>
            <div className="projecthero-content">
                <h1 className="projecthero-content-title">{title}</h1>
                <p className="projecthero-content-desc">{isData?.desc}</p>
            </div>
        </div>
    )
}

export default Hero;