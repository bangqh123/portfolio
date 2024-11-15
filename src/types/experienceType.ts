export interface TExperienceData {
    desc: string;
    title: string;
    internship: {
        icon: string;
        role: string;
        company: string;
        job: string;
        desc: string;
        start: string;
        end: string;
        address: string;
    };
    wokr: {
        icon: string;
        role: string;
        company: string;
        job: string;
        desc: string;
        start: string;
        end: string;
        address: string;
    };
    skill: {
      technical: { name: string; desc: string };
      soft: { name: string };
    };
};