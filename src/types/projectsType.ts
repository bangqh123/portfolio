export interface TProjectData {
    hero: {
        desc: string;
    };
    projects: {
        id: string
        img: string;
        name: string;
        git: string;
        demo: string;
        description: string;
        technicals: {
            name: string;
            icon: string;
        }[]
    }[];
}