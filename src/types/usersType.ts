import { IconType } from 'react-icons';

export interface TUserData {
  hero: {
    name: string;
    desc1: string;
    desc2: string;
    img: string;
    git: string;
    linkin: string;
    facebook: string;
    gitrepo: string;
    twitter: string;
  },
  whatido: {
    title: string;
    fileName: string;
    icons: { name: string; color?:string; icon:IconType | string}[];
    desc: string[];
  }[];
}
