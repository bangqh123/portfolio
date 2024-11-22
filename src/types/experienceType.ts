export interface TExperienceData {
    hero: {
        desc: string;
    };
    works?: {
        icons: {
            plus: string;
            minus: string;
        };
        infor: {
            id: string;
            img: string;
            name: string;
            major: string;
            descs: {
                icon: string;
                desc: string;
            }[];
            start: string;
            end: string;
            address: string;
        }[],
    };
    interships?: {
        icons: {
            plus: string;
            minus: string;
        };
        infor: {
            id: string;
            img: string;
            name: string;
            major: string;
            descs: {
                icon: string;
                desc: string;
            }[];
            start: string;
            end: string;
            address: string;
        }[];
    };
    skills?: {
        icons: {
            plus: string;
            minus: string;
        };
        infor: {
            technical: {
                icon: string;
                desc: string;
            }[];
            soft: {
                icon: string;
                desc: string;
            }[];
        };
    }
};