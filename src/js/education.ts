import { ICONS } from "../assets/icons";
import { TEducationData } from "./../types/educationType";

const educationData: TEducationData = {
    hero: {
        desc: "Basic Qualification and Certifications",
        icons: [
            {
                name: "LeetCode",
                icon: ICONS.LEETCODE,
                link: "example-link",
            },
            {
                name: "HackerRank",
                icon: ICONS.HACKERRANK,
                link: "example-link",
            },
        ],
    },
    degrees: [
        {   
            id: "greenwich",
            logo: ICONS.GREENWICH,
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
        // {
        //     id: "certification",
        //     color: "#b37173",
        //     person: "Andrew Ng",
        //     name: "Machine Learning",
        //     title: "Certification",
        //     img: "https://ashutoshhathidara.com/static/media/stanford_logo.2c497738.png",
        //     link: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
        // },
        // {
        //     id: "certification",
        //     color: "#b37173",
        //     person: "Andrew Ng",
        //     name: "Machine Learning",
        //     title: "Certification",
        //     img: "https://ashutoshhathidara.com/static/media/stanford_logo.2c497738.png",
        //     link: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
        // },
        // {
        //     id: "certification",
        //     color: "#b37173",
        //     person: "Andrew Ng",
        //     name: "Machine Learning",
        //     title: "Certification",
        //     img: "https://ashutoshhathidara.com/static/media/stanford_logo.2c497738.png",
        //     link: "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
        // },
    ],
};

export default educationData;
