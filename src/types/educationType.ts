export interface TEducationData {
    hero: {
        desc: string;
        icons: {
            icon: string;
            name: string;
            link: string;
        }[];
    };
    degrees: {
        id: string;
        logo: string;
        major: string;
        school_name: string;
        start: string;
        end: string;
        descs: {
            icon: string;
            desc: string;
        }[];
        link: string;
    }[];
    certifications: {
        id: string;
        img: string;
        name: string;
        link?: string;
        title: string;
        color?: string;
        person: string;
    }[];
};