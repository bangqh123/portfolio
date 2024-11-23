import { TProjectData } from "../types/projectsType"

import ShopImage from "../assets/images/Shop.png"
import DockImage from "../assets/images/Dock.png"
import BookingImage from "../assets/images/Booking.png"
import F_NEWSImage from "../assets/images/fnews.png"
import { ICONS } from "../assets/icons";

const projectData: TProjectData = {
    hero: {
        desc: "My projects makes use of vast variety of latest technology tools."
    },
    projects: [
        {
            id: "dock",
            img: DockImage,
            name: "Dock",
            description: "Build a real-time chat app with google user authentication",
            git: "https://github.com/khoa25200/dock",
            demo: "https://dock-sigma.vercel.app/",
            technicals: [
                {
                    name: "ReactJS",
                    icon: ICONS.REACT,
                },
                {
                    name: "LESS",
                    icon: ICONS.LESS,
                },
                {
                    name: "TypeScript",
                    icon: ICONS.TYPE,
                },
                {
                    name: "Ant Design",
                    icon: ICONS.ANT,
                },
            ]
        },
        {
            id: "booking",
            img: BookingImage,
            name: "Booking",
            description: "Build a medical appointment booking page interface",
            git: "https://github.com/duythong114/booking-care-frontend",
            demo: "https://booking-care-frontend-ten.vercel.app/login",
            technicals: [
                {
                    name: "HTML5",
                    icon: ICONS.HTML,
                },
                {
                    name: "SCSS",
                    icon: ICONS.SASS,
                },
                {
                    name: "JavaScript",
                    icon: ICONS.JAVA,
                }
            ]
        },
        {
            id: "fnews",
            img: F_NEWSImage,
            name: "F_News",
            description: "Build news website interface",
            git: "https://github.com/7inh/f_news",
            demo: "",
            technicals: [
                {
                    name: "HTML5",
                    icon: ICONS.HTML,
                },
                {
                    name: "CSS5",
                    icon: ICONS.CSS,
                },
                {
                    name: "JavaScript",
                    icon: ICONS.JAVA,
                }
            ]
        },
        {
            id: "shop",
            img: ShopImage,
            name: "Shop",
            description: "Build a shop website based on Shopee template",
            git: "https://github.com/bangqh123/Shop",
            demo: "https://bangqh123.github.io/Shop/",
            technicals: [
                {
                    name: "HTML5",
                    icon: ICONS.HTML,
                },
                {
                    name: "CSS5",
                    icon: ICONS.CSS,
                },
                {
                    name: "JavaScript",
                    icon: ICONS.JAVA,
                }
            ]
        },
    ]
}
    


export default projectData;