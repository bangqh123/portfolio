interface IRoute {
  [key: string]: string;

  HOMEPAGE: string;
  EDUCATION: string;
  EXPERIENCE: string;
  PROJECTPAGE: string;
  CONTACTPAGE: string;
}

export const ROUTES: IRoute = {
  HOMEPAGE: "",
  EDUCATION: "/education",
  EXPERIENCE: "/experience",
  PROJECTPAGE: "/project",
  CONTACTPAGE: "/contact",
};
