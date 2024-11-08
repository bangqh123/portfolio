import "./LayoutPage.scss";

import React, { useEffect, useState, PropsWithChildren } from "react";
import HeaderLayout from "../Header/Header";
import FooterLayout from "../Footer/Footer";
import { PROPS } from "../../configs/constants/footer.config";

interface LayoutPageProps {
    children: React.ReactNode;
}

const LayoutLandingPage: React.FC<LayoutPageProps> = ({ children }: PropsWithChildren) => {
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const scrollFraction = scrollTop / docHeight;

            if (scrollFraction >= 0.1) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div className="layout-page">
                <HeaderLayout isScroll={isScroll} />
                <main className="content-layout-page">{children}</main>
                <FooterLayout {...PROPS.FOOTER}/>
            </div>
        </>
    )
};

export default LayoutLandingPage;
