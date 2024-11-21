import "./WorkItem.scss";
import "./WorkItem.media.scss";

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store/store";

type TWorkItemProps = {
    className: string;
    isHiden: boolean;
};

interface TWorkItemInfor {
    id: string;
    name: string;
    img: string;
    major: string;
    descs: {
        icon: string;
        desc: string;
    }[];
    start: string;
    end: string;
    address: string;
}

const WorkItem: React.FC<TWorkItemProps> = ({ className, isHiden }) => {
    const [isData, setIsData] = useState<TWorkItemInfor[]>([]);

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
        setIsData(experienceInfo?.works?.infor || []);
    }, [experienceInfo]);

    return (
        <div className={`${className} ${isHiden ? "show" : ""}`}>
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

export default WorkItem;
