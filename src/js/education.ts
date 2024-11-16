import { ICONS } from "../assets/icons";
import { TEducationData } from "./../types/educationType";

const educationData: TEducationData = {
    hero: {
        desc: "Basic Qualification and Certifications",
        icons: [
            {
                name: "LeetCode",
                icon: "example-icon",
                link: "example-link",
            },
            {
                name: "HackerRank",
                icon: "example-icon",
                link: "example-link",
            },
        ],
    },
    degrees: [
        {   
            id: "greenwich",
            logo: "degree-icon",
            major: "Bachelor of Information Technology",
            school_name: "University of Greenwich",
            start: "2018/07",
            end: "2023/07",
            descs: [
                {
                    icon: ICONS.LIGHTNING,
                    desc: "Description of the degree",
                },
                {
                    icon: ICONS.LIGHTNING,
                    desc: "Description of the degree",
                },
            ],
            link: "https://greenwich.edu.vn/campus-tour/CT/",
        },
    ],
    certifications: [
        {
            img: "certification-image",
            title: "Certification Title",
            person: "Certifying Authority",
            link: "certification-link",
        },
        {
            img: "certification-image",
            title: "Certification Title",
            person: "Certifying Authority",
            link: "certification-link",
        },
        {
            img: "certification-image",
            title: "Certification Title",
            person: "Certifying Authority",
            link: "certification-link",
        },
    ],
};

export default educationData;
