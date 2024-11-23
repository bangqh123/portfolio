import "./SkillItem.scss";
import "./SkillItem.media.scss";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";

type TSkillItemProps = {
    className: string;
    technical: string;
    soft: string;
    isHidden: boolean;
};

interface TSkillItem {
    technical: {
        icon: string;
        desc: string;
    }[];
    soft: {
        icon: string;
        desc: string;
    }[];
}

const SkillItem: React.FC<TSkillItemProps> = ({ className, technical, soft, isHidden }) => {
    const [isData, setIsData] = useState<TSkillItem | null>(null);

    const { experienceInfo } = useSelector((state: RootState) => state.experience);

    useEffect(() => {
        if (experienceInfo?.skills?.infor) {
            setIsData(experienceInfo.skills.infor);
        }
    }, [experienceInfo]);

    return (
        <div className={`${className} ${isHidden ? "show" : ""}`}>
            <div className="technical">
                <h3 className="technical-title">{technical}</h3>
                <div className="technical-info">
                    {isData?.technical.map((data, index) => (
                        <div key={index} className="skill-item">
                            <img src={data.icon} alt="" className="skill-icon" />
                            <p className="skill-desc">{data.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="soft">
                <h3 className="soft-title">{soft}</h3>
                <div className="soft-info">
                    {isData?.soft.map((data, index) => (
                        <div key={index} className="skill-item">
                            <img src={data.icon} alt="" className="skill-icon" />
                            <p className="skill-desc">{data.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillItem;
