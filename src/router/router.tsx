import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { RoutesList } from "./RoutesList";
import AppContextProvider from "../context/app";
import { Homepage } from "../pages/Homepage";

const Routing = () => {
  const getRoutes = () => {
    var count = 0;
    const routes = [];
    while (count < RoutesList.length) {
      routes.push(
        <Route
          key={RoutesList[count].id}
          path={RoutesList[count].link}
          element={RoutesList[count].component}
        />
      );
      count++;
    }
    routes.push(<Route key="default" path="*" element={<Homepage />} />);
    return routes;
  };

  return (
    <Router>
      <AppContextProvider>
        <Routes>{getRoutes()}</Routes>
      </AppContextProvider>
    </Router>
  );
};

export default Routing;
