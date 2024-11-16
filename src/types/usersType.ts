export interface TUserData {
  hero: {
    name: string;
    desc: string[];
    img: string;
    socials: {
      icon: string;
      color: string;
      link: string;
    }[];
    repo: {
      icon: string;
      link: string;
    };
  };
  whatido: {
    id?: string;
    title: string;
    fileName: string;
    icons: {
      name: string;
      color?: string;
      icon: string;
    }[];
    descs: {
      icon: string;
      desc: string;
    }[];
  }[];
}
