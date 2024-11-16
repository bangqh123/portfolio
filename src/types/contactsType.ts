export interface TContactData {
    hero: {
        img: string;
        alt: string;
        desc: string;
        icons: { icon: string; color: string; link: string }[];
        resume: string;
    },
    blog: { 
        desc?: string, 
        link?: string 
    };
    address: {
        desc: string;
        link: string;
    }
}