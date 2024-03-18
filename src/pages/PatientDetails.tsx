import { useEffect, useContext } from "react";
import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { MPatientDetails } from "../modules/patientDetails";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { routesName } from "../router/RoutesList";
import { useParams } from "react-router";

export const DigicarePatientDetails = () => {
  const { isSignedIn, navigationAsPerSignedStatus } = useContext(
    AppContext,
  ) as ContextProps;
  const { patient_id } = useParams();

  useEffect(() => {
    navigationAsPerSignedStatus(routesName.patientDetails);
  }, [isSignedIn]);

  return (
    <DigiCareDrawer>
      <MPatientDetails patient_id={patient_id} />
    </DigiCareDrawer>
  );
};
