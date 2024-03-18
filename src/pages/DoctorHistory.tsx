import { MDoctorHistory } from "../modules/doctorHistory";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";

export const DoctorHistory = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext,
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.doctorList);
  }, [isSignedIn]);

  return (
    <DigiCareDrawer>
      <MDoctorHistory />
    </DigiCareDrawer>
  );
};
