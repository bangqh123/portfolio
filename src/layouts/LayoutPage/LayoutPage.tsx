import "./LayoutPage.scss";

import React, { useEffect, useState, PropsWithChildren } from "react";
import HeaderLayout from "../Header/Header";
import Buttons from "../../components/buttons/Buttons/Buttons";
import { FaArrowUp } from "react-icons/fa";

interface LayoutPageProps {
    children: React.ReactNode;
}

const LayoutLandingPage: React.FC<LayoutPageProps> = ({ children }: PropsWithChildren) => {
    const [isScroll, setIsScroll] = useState(false);

    const handleUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / docHeight;

            setIsScroll(scrollFraction >= 0.02);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="layout-page">
            <HeaderLayout isScroll={isScroll} />
            <main className="content-layout-page">{children}</main>
            {isScroll && (
                <Buttons 
                    icon={<FaArrowUp />} 
                    className="layout-page-top" 
                    onClick={handleUp}
                />
            )}
        </div>
    );
};

export default LayoutLandingPage;
