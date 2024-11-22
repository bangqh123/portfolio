import "./Internships.scss"
import "./Internships.media.scss"

import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store/store";
import InternshipItem from "./InternshipItem/InternshipItem";

type TInternshipsProps = {
    title: string
}

interface TInternships {
    icons: {
        plus: string;
        minus: string;
    };
    infor: {
        id: string;
        name: string;
        major: string;
        desc: string[];
        start: string;
        end: string;
        address: string;
    }[];
}

const Internships: React.FC<TInternshipsProps> = ( {title} ) => {
    const [isData, setIsData] = useState<TInternships>();
    const [isHidden, setIsHidden] = useState(false)

    const { experienceInfo } = useSelector((state: RootState) => state.experience);

    useEffect(() => {
        setIsData(experienceInfo?.interships);
    }, [experienceInfo]);

    return (
        <div className="experienceinternship">
             <div className="experienceinternship-title">
                <div className="experienceinternship-title-text">{title}</div>
                <div className="experienceinternship-title-icon" onClick={() => setIsHidden(!isHidden)}>
                    {isHidden ? (
                        <img src={isData?.icons.minus} alt="Collapse" />
                    ) : (
                        <img src={isData?.icons.plus} alt="Expand" />
                    )}
                </div>
            </div>
            <InternshipItem className="experienceinternship-content" isHidden={isHidden}/>
        </div>
    )
}

export default Internships;
