import { digiAxios } from ".";
import { ILoginUser } from "../context/interface";
import { IPatient } from "../modules/avatarPopOverContent/interface";
import { IDoctorHistory } from "../modules/doctorHistory/interface";
import { DoctorSignUpApiProps } from "./interface";

export const getDoctorByUsername = (username: string) => {
  return digiAxios.get(`/doctor/${username}`);
};

export const getAllDoctors = () => {
  return digiAxios.get("/doctors");
};

export const updateDoctorProfileDetails = (
  patient_username: string,
  profileUser: IPatient | ILoginUser | IDoctorHistory,
) => {
  return digiAxios.put(
    `/doctor/${patient_username}`,
    profileUser as DoctorSignUpApiProps,
  );
};
