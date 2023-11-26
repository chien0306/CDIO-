export interface RouteItem {
  path: string;
  exact: boolean;
  component: string;
  private: boolean;
}

export const routeList: RouteItem[] = [
  {
    path: "",
    exact: true,
    component: "pages/home/Home.jsx",
    private: false,
  },
  {
    path: "login",
    exact: true,
    component: "pages/login/.jsx",
    private: false,
  },
];
