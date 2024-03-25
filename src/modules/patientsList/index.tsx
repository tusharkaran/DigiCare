import { Avatar, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import { AppContext } from "../../context/app";
import { ContextProps } from "../../context/interface";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { digicareConfig } from "../../assets/constants/config";
import DigiCareAutocomplete from "../common/components/DigicareAutoComplete";
import { DigicareAutoCompleteDataProps } from "../common/interface/DigicareAutoComplete";
import { IDoctorHistory } from "../doctorHistory/interface";
import { getPatientByUsername } from "../../api/patient";

export const MPatientsList = () => {
  const { user } = useContext(AppContext) as ContextProps;
  const [patientListIds, setPatientsListIds] = useState<
    DigicareAutoCompleteDataProps[]
  >([]);
  const [patientsInfo, setPatientsInfo] = useState<
    DigicareAutoCompleteDataProps[]
  >([]);
  const [patientList, setPatientList] = useState<Array<string>>();
  const navigate = useNavigate();

  useMemo(() => {
    setPatientList((user as IDoctorHistory).patients);
  }, [user]);

  const renderPatientInfo = async () => {
    const dummyInfoData = [];
    const dummyIdsData = [];
    for (let i = 0; i < patientList.length; i++) {
      await getPatientByUsername(patientList[i]).then(async (res) => {
        dummyIdsData.push({
          label: res.data.data.name,
          value: res.data.data.user_name,
        });
        dummyInfoData.push({
          label: res.data.data.name,
          value: res.data.data.user_name,
        });
      });
    }
    return { dummyInfoData: dummyInfoData, dummyIdsData: dummyIdsData };
  };

  useEffect(() => {
    renderPatientInfo().then((res) => {
      const dummyIdsData = res.dummyIdsData;
      const dummyInfoData = res.dummyInfoData;
      const ids = dummyIdsData.map(({ value }) => value);
      const filtered = dummyIdsData.filter(
        ({ value }, index) => !ids.includes(value, index + 1)
      );

      const info = dummyInfoData.map(({ value }) => value);
      const filteredInfo = dummyInfoData.filter(
        ({ value }, index) => !info.includes(value, index + 1)
      );

      setPatientsListIds(filtered);
      setPatientsInfo(filteredInfo);
    });
  }, [patientList]);

  return (
    <Grid className="patient-list-parent">
      <DigiCareAutocomplete
        className="patient-list-auto-complete"
        placeHolder="Search Patient"
        data={patientsInfo}
        handleAutocompleteChange={(e: DigicareAutoCompleteDataProps) => {
          setPatientsListIds(e ? [e] : patientsInfo);
        }}
        isGroupByFirstLetter={true}
      />
      <Grid className="patient-list-grid">
        {patientListIds?.map((patientId) => {
          return (
            <Grid
              className="patient-list-detail-grid"
              onClick={() => {
                navigate(`/patient-details/${patientId?.value}`);
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={digicareConfig.webPort + patientId.value}
                sx={{ width: 150, height: 150 }}
              />
              <Typography className="patient-list-patient-name">
                {patientId?.label}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
