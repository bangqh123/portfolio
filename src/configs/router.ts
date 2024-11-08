interface IRoute {
  [key: string]: string;

  HOMEPAGE: string;
  RESUMEPAGE: string;
  PROJECTPAGE: string;
  CONTACTPAGE: string;
}

export const ROUTES: IRoute = {
  HOMEPAGE: "",
  RESUMEPAGE: "/resume",
  PROJECTPAGE: "/project",
  CONTACTPAGE: "/contact",
};
