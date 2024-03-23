import { Avatar, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";
import { dummyPatientsList } from "../../dummyData/patientsList";
import { patientData } from "../../dummyData/patientData";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { digicareConfig } from "../../assets/constants/config";
import DigiCareAutocomplete from "../common/components/DigicareAutoComplete";
import { DigicareAutoCompleteDataProps } from "../common/interface/DigicareAutoComplete";

export const MPatientsList = () => {
  const { user } = useContext(AppContext) as ContextProps;
  const [patientListIds, setPatientsListIds] = useState<Array<string>>();
  const navigate = useNavigate();

  const getPatientIds = () => {
    return dummyPatientsList.find((dummyDoctor) => {
      return dummyDoctor.doctor_username === user?.user_name;
    })?.patient_username;
  };

  useEffect(() => {
    setPatientsListIds(getPatientIds());
  }, []);

  const getPatientInfo = (patientId: string) => {
    return patientData.find((patient) => patient.user_name === patientId);
  };

  const getAutoComplateFormattedData = () => {
    return patientListIds?.map((patientId) => {
      const patient = getPatientInfo(patientId);
      return {
        label: patient?.name,
        value: patient?.user_name,
      } as DigicareAutoCompleteDataProps;
    });
  };

  return (
    <Grid className="patient-list-parent">
      <DigiCareAutocomplete
        className="patient-list-auto-complete"
        placeHolder="Search Patient"
        data={getAutoComplateFormattedData() || []}
        handleAutocompleteChange={(e: DigicareAutoCompleteDataProps) =>
          setPatientsListIds(e?.value ? [e?.value as string] : getPatientIds())
        }
        isGroupByFirstLetter={true}
      />
      <Grid className="patient-list-grid">
        {patientListIds?.map((patientId) => {
          const patient = getPatientInfo(patientId);
          return (
            <Grid
              className="patient-list-detail-grid"
              onClick={() => {
                navigate(`/patient-details/${patient?.user_name}`);
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={digicareConfig.webPort + patient?.profile_pic}
                sx={{ width: 150, height: 150 }}
              />
              <Typography className="patient-list-patient-name">
                {patient?.name}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
