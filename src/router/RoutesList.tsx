import { DigicareAbout } from "../pages/About";
import { DigicareContact } from "../pages/Contact";
import { DoctorHistory } from "../pages/DoctorHistory";
import HistoryPage from "../pages/HistoryPage";
import { Homepage } from "../pages/Homepage";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { IRoutesPath } from "./interface";

export const routesName = {
  signin: "/signin",
  signup: "/signup",
  dashboard: "/dashboard",
  doctorList: "/doctor-list",
  about: "/about",
  contact: "/contact",
  history: "/history",
};

export const RoutesList: IRoutesPath[] = [
  {
    name: "drawer.drawerLink.signin",
    link: routesName.signin,
    id: "signin",
    renderDrawerComponents: false,
    component: <SignIn />,
  },
  {
    name: "drawer.drawerLink.signup",
    link: routesName.signup,
    id: "signup",
    renderDrawerComponents: false,
    component: <SignUp />,
  },
  {
    name: "drawer.drawerLink.dashboard",
    link: routesName.dashboard,
    id: "dashboard",
    renderDrawerComponents: true,
    component: <Homepage />,
  },
  {
    name: "drawer.drawerLink.history",
    link: routesName.history,
    id: "history",
    renderDrawerComponents: true,
    component: <HistoryPage />,
  },
  {
    name: "drawer.drawerLink.doctorList",
    link: routesName.doctorList,
    id: "doctorList",
    renderDrawerComponents: true,
    component: <DoctorHistory />,
  },
  {
    name: "drawer.drawerLink.about",
    link: routesName.about,
    id: "about",
    renderDrawerComponents: true,
    component: <DigicareAbout />,
  },
  {
    name: "drawer.drawerLink.contact",
    link: routesName.contact,
    id: "contact",
    renderDrawerComponents: true,
    component: <DigicareContact />,
  },
];
