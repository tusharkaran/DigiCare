import { digiAxios } from ".";
import { ILoginUser } from "../context/interface";
import { IPatient } from "../modules/avatarPopOverContent/interface";
import { IDoctorHistory } from "../modules/doctorHistory/interface";
import { PatientSignUpAPIProps } from "./interface";

export const getPatientByUsername = (username: string) => {
  return digiAxios.get(`/patient/${username}`);
};

export const getAllPatients = () => {
  return digiAxios.get("/patient");
};

export const updateProfileDetails = (
  patient_username: string,
  profileUser: IPatient | ILoginUser | IDoctorHistory
) => {
  return digiAxios.put(
    `/patient/${patient_username}`,
    profileUser as PatientSignUpAPIProps
  );
};

export const getLatestRealTimeData = (patient_username: string) => {
  return digiAxios.get(`/latest-record/${patient_username}`);
};

export const getAllRealTimeData = (username: string) => {
  return digiAxios.get(`/record-data/${username}`);
};
