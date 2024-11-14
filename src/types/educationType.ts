export interface TEducationData {
    gpa: string;
    title: string;
    icons: {
        icon: string;
    };
    degrees: {
        icon: string;
        title: string;
        major: string;
        name: string;
        start: string;
        end: string;
        desc1: string;
        desc2: string;
        desc3?: string;
        desc4?: string;
        link: string;
    };
    certifications?: {
        img: string;
        title: string;
        person: string;
        link: string;
    }
};