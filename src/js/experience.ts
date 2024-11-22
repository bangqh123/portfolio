import { ICONS } from "../assets/icons";
import { TExperienceData } from "./../types/experienceType";
import LIKELION from "../assets/images/likelion.png"
import IVS from "../assets/images/ivs.png"

const experiencedata: TExperienceData = {
    hero: {
        desc: "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
    },
    works: {
        icons: {
            plus: ICONS.PLUS,
            minus: ICONS.MINUS,
        },
        infor: [
            {
                id: "lion",
                name: "LikeLion",
                img: LIKELION,
                major: "Front End Developer",
                descs: [

                    {
                        icon: ICONS.LIGHTNING,
                        desc: "Programme outsourcing projects"
                    }, 
                    {
                        icon: ICONS.LIGHTNING,
                        desc: "Create coding frames and design database based on project descriptions",
                    },
                ],
                start: "06/2024",
                end: "04/2024",
                address: "Quan 7, Ho Chi Minh",
            },
        ],
    },
    interships: {
        icons: {
            plus: ICONS.PLUS,
            minus: ICONS.MINUS,
        },
        infor: [
            {
                id: "ivs",
                name: "IVS (Individual System) CanTho",
                img: IVS,
                major: "Front End Developer",
                descs: [
                    {
                        icon: ICONS.LIGHTNING,
                        desc: "Programme outsourcing projects",

                    },
                    {
                        icon: ICONS.LIGHTNING,
                        desc: "Create coding frames and design database based on project descriptions",
                    },
                ],
                start: "11/2021",
                end: "04/2022",
                address: "Ninh Kieu, Can Tho",
            },
        ],
    },
    skills: {
        icons: {
            plus: ICONS.PLUS,
            minus: ICONS.MINUS,
        },
        infor: {
            technical: [
                {
                    icon: ICONS.LIGHTNING,
                    desc: "Git, Npm",
                },
                {
                    icon: ICONS.LIGHTNING,
                    desc: "HTML, CSS, JavaScript, TypeScript",
                },
                {
                    icon: ICONS.LIGHTNING,
                    desc: "Bootstrap, Tailwind, Ant Design",
                },
                {
                    icon: ICONS.LIGHTNING,
                    desc: "ReactJS, React Native",

                }  
            ],
            soft: [
                {
                    icon: ICONS.LIGHTNING,
                    desc: "Teamwork",
                },
                {
                    icon: ICONS.LIGHTNING,
                    desc: "Communication",
                },
                {
                    icon: ICONS.LIGHTNING,
                    desc: "Problem-Solving"
                }   
            ]
        },
    },
};

export default experiencedata;
