import { DigiCareDrawer } from "../modules/homepage/drawer/Drawer";
import { MPatientDetails } from "../modules/patientDetails";
import { useParams } from "react-router";

export const DigicarePatientDetails = () => {
  const { patient_id } = useParams();

  return (
    <DigiCareDrawer>
      <MPatientDetails patient_id={patient_id} />
    </DigiCareDrawer>
  );
};
