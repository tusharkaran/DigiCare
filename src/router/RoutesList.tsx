import { DigicareAbout } from "../pages/About";
import { DigicareContact } from "../pages/Contact";
import HistoryPage from "../pages/HistoryPage";
import { Homepage } from "../pages/Homepage";

export const routesName = {
  dashboard: "/dashboard",
  about: "/about",
  contact: "/contact",
  history: "/history",
};

export const RoutesList = [
  {
    name: "drawer.drawerLink.dashboard",
    link: routesName.dashboard,
    id: "dashboard",
    renderHelperComponents: false,
    component: <Homepage />,
  },
  {
    name: "drawer.drawerLink.history",
    link: routesName.history,
    id: "history",
    renderHelperComponents: false,
    component: <HistoryPage />,
  },

  {
    name: "drawer.drawerLink.about",
    link: routesName.about,
    id: "about",
    renderHelperComponents: false,
    component: <DigicareAbout />,
  },
  {
    name: "drawer.drawerLink.contact",
    link: routesName.contact,
    id: "contact",
    renderHelperComponents: false,
    component: <DigicareContact />,
  },
];
