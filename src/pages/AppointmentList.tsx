import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";
import { MAppointmentList } from "../modules/appointments/appointmentList";

export const AppointmentList = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext,
  ) as ContextProps;

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.appointmentList);
  }, [isSignedIn]);

  return (
    <DigiCareDrawer>
      <MAppointmentList />
    </DigiCareDrawer>
  );
};
