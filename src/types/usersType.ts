export interface TUserPortfolio {
  hero: {
    name: string;
    desc: string;
    img: string;
  };
  about: {
    name: string;
    age: number;
    img: string;
    address: string;
    phone: string;
    email: string;
    major: string;
    desc1: string;
    desc2: string;
    git: string;
    linkin: string;
    facebook: string;
  };
  education: Array<{
    school_name: string;
    major: string;
    desc: string;
    gpa: string;
    start: string;
    end: string;
  }>;
  experience: Array<{
    job: string;
    company: string;
    desc: string;
    role1: string;
    role2: string;
    start: string;
    end: string;
  }>;
  skill: {
    technical: Array<{ name: string; desc: string }>;
    soft: Array<{ name: string }>;
  };
  resume: { cv: string };
}
