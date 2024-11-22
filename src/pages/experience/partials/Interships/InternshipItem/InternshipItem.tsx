import "./InternshipItem.scss"
import "./InternshipItem.media.scss"

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";

type TInternshipItemProps = {
    className: string;
    isHidden: boolean;
};

interface TInternship {
    id: string;
    img: string;
    name: string;
    major: string;
    descs: {
        icon: string;
        desc: string;
    }[];
    start: string;
    end: string;
    address: string;
}

const InternshipItem: React.FC<TInternshipItemProps> = ({ className, isHidden }) => {
    const [isData, setIsData] = useState<TInternship[]>([]);

    const { experienceInfo } = useSelector((state: RootState) => state.experience);

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
        setIsData(experienceInfo?.interships?.infor || []);
    }, [experienceInfo]);

    return (
        <div className={`${className} ${isHidden ? "show" : ""}`}>
            {isData.map((item, index) => (
                <div
                    key={index}
                    id={item.id}
                    ref={(el) => (itemsRef.current[index] = el!)}
                    className={`item ${isAnimation[item.id] ? "animation" : ""}`
                    }>
                    <div className="item-img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="item-content">
                        <div className="item-content-title">
                            <div className="title">
                                <h3>{item.name}</h3>
                                <p>{item.major}</p>
                            </div>
                            <div className="desc">
                                <p>{item.start} - {item.end}</p>
                                <p>{item.address}</p>
                            </div>
                        </div>
                        <div className="item-content-body">
                            {item.descs.map((descs, index) => (
                                <div key={index} className="content-body-descs">
                                    <img src={descs.icon} alt="" />
                                    <p>{descs.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default InternshipItem;
