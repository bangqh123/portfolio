import "./Works.scss"
import "./Works.media.scss"

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store/store";
import WorkItem from "./WorkItem/WorkItem";

type TWorksProps = {
    title: string
}

interface TWork {
    icons: {
        plus: string;
        minus: string;
    };
    infor: [],
}

const Works: React.FC<TWorksProps> = ({ title }) => {
    const [isData, setIsData] = useState<TWork>();
    const [isHiden, setIsHiden] = useState(false)

    const { experienceInfo } = useSelector((state: RootState) => state.experience);

    useEffect(() => {
        setIsData(experienceInfo?.works);
    }, [experienceInfo]);

    return (
        <div className="experiencework">
            <div className="experiencework-title">
                <div className="experiencework-title-text">{title}</div>
                <div className="experiencework-title-icon" onClick={() => setIsHiden(!isHiden)}>
                    {isHiden ? (
                        <img src={isData?.icons.minus} alt="Collapse" />
                    ) : (
                        <img src={isData?.icons.plus} alt="Expand" />
                    )}
                </div>
            </div>
            <WorkItem className="experiencework-content" isHiden={isHiden}/>
        </div>
    )
}

export default Works;
