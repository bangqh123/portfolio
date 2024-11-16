import "./Address.scss";
import "./Address.media.scss";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../redux/store/store";
import { blueTheme } from "../../../../styles/theme";
import AddressImg from "./addressImg";
import Button from "../../../../components/buttons/Buttons/Buttons";

type TAddressProps = {
    address: string;
};

interface TAddress {
    desc: string;
    link: string;
}

const Address: React.FC<TAddressProps> = ({ address }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [isData, setIsData] = useState<TAddress>();
    const [isAnimation, setIsAnimation] = useState(false);
    const { contactInfo } = useSelector((state: RootState) => state.contact);
    const itemRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!itemRef.current) return;

            const rect = itemRef.current.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsAnimation(true);
            } else {
                setIsAnimation(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsData(contactInfo?.[0]?.address);
    }, [dispatch, contactInfo]);

    return (
        <div  
            ref={itemRef}
            className={`contactaddress ${isAnimation ? "animation" : ""}`}
        >
            <div className="contactaddress-img">
                <AddressImg theme={blueTheme} />
            </div>
            <div className="contactaddress-content">
                <h1 className="contactaddress-content-title">{address}</h1>
                <p className="contactaddress-content-desc">{isData?.desc}</p>
                <Button
                    newTab={true}
                    link={isData?.link}
                    title="Visit on Google Maps"
                    className="contactaddress-content-btn"
                />
            </div>
        </div>
    );
};

export default Address;
