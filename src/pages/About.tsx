import { About } from "../modules/about";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";
import { DataContact } from "../modules/DigiDataContact";

export const DigicareAbout = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext,
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.about);
  }, [isSignedIn]);

  return (
    <DigiCareDrawer>
      <DataContact />
    </DigiCareDrawer>
  );
};
