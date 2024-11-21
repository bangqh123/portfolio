import "./CertificationCard.scss";
import "./CertificationCard.media.scss";

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";

interface TCertifications {
    id: string;
    color: string;
    img?: string;
    title?: string;
    person?: string;
    link?: string;
}

const CertificationCard: React.FC = () => {
    const [isData, setIsData] = useState<TCertifications[]>([]);

    const { educationInfo } = useSelector((state: RootState) => state.education);
    const [isAnimation, setIsAnimation] = useState<{ [key: string]: boolean }>({});
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            itemsRef.current.forEach((itemRef, idx) => {
                if (itemRef) {
                    const isVisible = itemRef.getBoundingClientRect().top <= window.innerHeight;
                    setIsAnimation((prev) => ({
                        ...prev,
                        [isData[idx]?.id]: isVisible,
                    }));
                }
            });
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isData]);

    useEffect(() => {
        setIsData(educationInfo?.certifications);
    }, [educationInfo]);

    return (
        <>
            {isData?.map((item, index) => (
                <div
                    key={index} 
                    id={item.id}
                    ref={(el) => (itemsRef.current[index] = el!)}
                    className={`certificationCard ${isAnimation[item.id] ? "animation" : ""}`}
                >
                    <a href={item.link} target="_blank" className="certificationCard-title">
                        <div className="certificationCard-title-bg" style={{ backgroundColor: item.color }}>
                            <img src={item.img} alt="" />
                            <span>{item.title}</span>
                        </div>
                    </a>
                    <div className="certificationCard-name">{item.person}</div>
                    <div className="certificationCard-person">{item.person}</div>
                </div>
            ))}
        </>
    );
};

export default CertificationCard;
