import "./Blogs.scss";
import "./Blogs.media.scss";

import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../redux/store/store";
import { blueTheme } from "../../../../styles/theme";
import BlogImg from "./blogimg";
import Button from "../../../../components/buttons/Buttons/Buttons";

type TBlogProps = {
    blog: string;
};

interface TBlog {
    desc: string;
    link: string;
}

const Blogs: React.FC<TBlogProps> = ({ blog }) => {
    const dispatch = useDispatch<AppDispatch>();

    const [isData, setIsData] = useState<TBlog | null>(null);
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
        if (contactInfo?.length > 0) {
            const blog = contactInfo[0]?.blog;
            if (blog && Object.keys(blog).length > 0) {
                console.log("Blog data found:", blog);
                setIsData(blog);
            } else {
                console.log("No blog data available.");
                setIsData(null);
            }
        } else {
            console.log("contactInfo is empty or undefined.");
            setIsData(null);
        }
    }, [dispatch, contactInfo]);

    return (
        <>
            {isData && (
                <div
                    ref={itemRef}
                    className={`contactblog ${isAnimation ? "animation" : ""}`}
                >
                    <div className="contactblog-content">
                        <h1 className="contactblog-content-title">{blog}</h1>
                        <p className="contactblog-content-desc">{isData.desc}</p>
                        <Button
                            newTab={true}
                            link={isData.link}
                            title="Visit My Blogsite"
                            className="contactblog-content-btn"
                        />
                    </div>
                    <div className="contactblog-img">
                        <BlogImg theme={blueTheme} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Blogs;
