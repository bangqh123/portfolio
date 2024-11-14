export interface TContactData {
    desc: string;
    icons: {
        icon: string;
        link: string;
    }
    resume: { cv: string };
    blog: { desc: string, link: string};
    address: {
        desc: string;
        link: string;
    }
}