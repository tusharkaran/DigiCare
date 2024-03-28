import { digiAxios } from ".";
import {
  DoctorSignUpApiProps,
  PatientSignUpAPIProps,
  UserSignInAPIProps,
} from "./interface";

export const patientSignupService = (data: PatientSignUpAPIProps) => {
  return digiAxios.post("/register-patient", data);
};

export const doctorSignupService = (data: DoctorSignUpApiProps) => {
  return digiAxios.post("/register-doctor", data);
};

export const patientSignIn = (data: UserSignInAPIProps) => {
  return digiAxios.post("/patient-login", data);
};

export const doctorSignIn = (data: UserSignInAPIProps) => {
  return digiAxios.post("/doctor-login", data);
};

export const adminSignIn = (data: UserSignInAPIProps) => {
  return digiAxios.post("/admin-login", data);
};
