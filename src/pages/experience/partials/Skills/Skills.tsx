import "./Skills.scss"
import "./Skills.media.scss"

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store/store";
import SkillItem from "./SkillItem/SkillItem";


type TSkillsProps = {
    title: string;
    technical: string;
    soft: string;
}

interface TSkill {
    icons: {
        plus: string;
        minus: string;
    };
    infor: [];
}

const Skills: React.FC<TSkillsProps> = ({ title, technical, soft }) => {
    const [isData, setIsData] = useState<TSkill>();
    const [isHiddden, setIsHidden] = useState(false)

    const { experienceInfo } = useSelector((state: RootState) => state.experience);

    useEffect(() => {
        setIsData(experienceInfo?.skills);
    }, [experienceInfo]);

    return (
        <div className="experienceskill">
            <div className="experienceskill-title">
                <div className="experienceskill-title-text">{title}</div>
                <div className="experienceskill-title-icon" onClick={() => setIsHidden(!isHiddden)}>
                    {isHiddden ? (
                        <img src={isData?.icons.minus} alt="Collapse" />
                    ) : (
                        <img src={isData?.icons.plus} alt="Expand" />
                    )}
                </div>
            </div>
            <SkillItem className="experienceskill-content" technical={technical} soft={soft} isHidden={isHiddden}/>
        </div>
    )
}

export default Skills;
