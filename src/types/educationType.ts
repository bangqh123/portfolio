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
        img?: string;
        title?: string;
        person?: string;
        link?: string;
    }[];
};