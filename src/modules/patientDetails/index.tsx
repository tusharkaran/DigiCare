import { Grid, Typography, Tabs, Tab, Box } from "@mui/material";
import { History } from "../history";
import { DigiProfile } from "../profile/Profile";
import { PatientDetailsProps } from "./interface";
import { patientData } from "../../dummyData/patientData";
import { MDoctorHistory } from "../doctorHistory";
import { useState } from "react";
import "./style.scss";

export const MPatientDetails = ({ patient_id }: PatientDetailsProps) => {
  const user = patientData.find((data) => data._id === patient_id);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Grid>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab
          className="patient-details-tab"
          label="Patient's Medical History"
        />
        <Tab
          className="patient-details-tab"
          label="Realtime constant's History"
        />
        <Tab className="patient-details-tab" label="Patient's Profile" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <MDoctorHistory />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <History />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <DigiProfile user={user} isEdit={false} />
      </TabPanel>
    </Grid>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
};
