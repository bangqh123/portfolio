import "./DegreesCard.scss";
import "./DegreesCard.media.scss";

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";
import Buttons from "../../../../../components/buttons/Buttons/Buttons";

interface TDegreesCard {
    id: string;
    logo: string;
    major: string;
    school_name: string;
    start: string;
    end: string;
    descs: {
        icon: string;
        desc: string;
    }[];
    link: string;
}

const DegreesCard: React.FC = () => {
    const [isData, setIsData] = useState<TDegreesCard[]>([]);

    const { educationInfo } = useSelector((state: RootState) => state.education);
    const [isAnimation, setIsAnimation] = useState<{ [key: string]: boolean }>({});
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / docHeight;

            setIsAnimation((prevState) => ({
                ...prevState,
                greenwich: itemsRef.current[0]?.getBoundingClientRect().top <= window.innerHeight && scrollFraction >= 0.01,
            }));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsData(educationInfo?.degrees);
    }, [educationInfo]);

    return (
        <>
            {isData?.map((item, index) => (
                <div 
                    key={index} 
                    id={item.id}
                    ref={(el) => (itemsRef.current[index] = el!)}
                    className={`degreesCard ${isAnimation[item.id] ? "animation" : ""}`}
                >
                    <div className="degreesCard-logo">
                        <img src={item.logo} alt="School picture" />
                    </div>
                    <div className="degreesCard-content">
                        <div className="degreesCard-content-header">
                            <div className="content-header-school">
                                <h1>{item.school_name}</h1>
                                <div className="header-school-tiem">
                                    {item.start}
                                    <span>-</span>
                                    {item.end}
                                </div>
                            </div>
                            <div className="content-header-major">{item.major}</div>
                        </div>
                        <div className="degreesCard-content-body">
                            {item.descs.map((descs, id) => (
                                <div key={id} className="content-body-descs">
                                    <img src={descs.icon} alt="" />
                                    <p>{descs.desc}</p>
                                </div>
                            ))}
                            <div className="content-body-btn">
                                <Buttons
                                    newTab={true}
                                    link={item.link}
                                    title="Visit Website"
                                    className="button-website"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default DegreesCard;
