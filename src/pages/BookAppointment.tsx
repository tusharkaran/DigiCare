import { MBookAPpointment } from "../modules/appointments/bookAppointment";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";
import { Calling } from "../modules/calling/Calling";
import { patientData } from "../dummyData/patientData";

export const BookAppointemnt = () => {
  const { isSignedIn, navigationAsPerSignedStatus, user } = useContext(
    AppContext,
  ) as ContextProps;
  const getRoomId = () => {
    return patientData.find((data) => data._id === user._id)?.room_id;
  };

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.bookAppointment);
  }, [isSignedIn]);

  return (
    <DigiCareDrawer>
      <MBookAPpointment />
      {/* <Calling roomId={getRoomId()} /> */}
    </DigiCareDrawer>
  );
};
