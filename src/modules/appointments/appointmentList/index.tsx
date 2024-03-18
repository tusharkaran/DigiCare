import {
  Tabs,
  Tab,
  Typography,
  Box,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import {
  PatientDoctorHistory,
  doctorData,
} from "../../../dummyData/patientDoctorHistory";
import { bookAppointmentDummyData } from "../../../dummyData/bookAppointment";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { EUserRole, IPatient } from "../../avatarPopOverContent/interface";
import { digicareConfig } from "../../../assets/constants/config";
import { IAppointmnets } from "../interface";
import { IDoctorHistory } from "../../doctorHistory/interface";
import { useNavigate } from "react-router";
import "./style.scss";
import { patientData } from "../../../dummyData/patientData";

export const MAppointmentList = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [appointments, setAppointments] = useState<IAppointmnets[]>([]);
  const { user } = useContext(AppContext) as ContextProps;
  const currentDate = new Date();
  const navigate = useNavigate();

  const getPatientsDoctors = () => {
    return PatientDoctorHistory;
  };

  useEffect(() => {
    const dummyAppointment = [];
    if (user?.role === EUserRole.patient) {
      PatientDoctorHistory?.forEach((linkedDoctor) => {
        const appointments = bookAppointmentDummyData?.find((d) => {
          return d.doctor_id === linkedDoctor;
        })?.appointments;
        appointments?.forEach((a) => {
          if (a.patient_id === user?._id) {
            dummyAppointment.push(a);
          }
        });
      });

      setAppointments(dummyAppointment);
    } else {
      setAppointments(
        bookAppointmentDummyData?.find((d) => {
          return d.doctor_id === user?._id;
        })?.appointments,
      );
    }
  }, [user]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const pastAppointments = appointments
    ?.filter((appointment) => new Date(appointment.date) < currentDate)
    .sort((a, b) => {
      if (a.date < b.date) return -1;
      else return 1;
    });

  const upcomingAppointments = appointments
    ?.filter((appointment) => new Date(appointment.date) >= currentDate)
    .sort((a, b) => {
      if (a.date < b.date) return -1;
      else return 1;
    });

  const getDoctorInformation = (appointment: IAppointmnets) => {
    return doctorData.find((d) => d._id === appointment.doctor_id);
  };

  const getPatientInformation = (appointment: IAppointmnets) => {
    return patientData.find((d) => d._id === appointment.patient_id);
  };

  const handleJoin = (room_id) => {
    navigate(`/room/${room_id}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={selectedTab} onChange={handleTabChange}>
        <Tab className="appointment-list-tab" label="Upcoming Appointments" />
        <Tab className="appointment-list-tab" label="Past Appointments" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        {upcomingAppointments?.map((appointment) => {
          const linkedTo =
            user?.role === EUserRole.patient
              ? getDoctorInformation(appointment)
              : getPatientInformation(appointment);
          return (
            <TabContent
              appointment={appointment}
              linkedTo={linkedTo}
              isPast={false}
              handleJoin={() => handleJoin(appointment.room_id)}
            />
          );
        })}
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        {pastAppointments?.map((appointment) => {
          const linkedTo =
            user?.role === EUserRole.patient
              ? getDoctorInformation(appointment)
              : getPatientInformation(appointment);
          return (
            <TabContent
              appointment={appointment}
              linkedTo={linkedTo}
              isPast={true}
            />
          );
        })}
      </TabPanel>
    </Box>
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

interface TabContentProps {
  appointment: IAppointmnets;
  linkedTo: IDoctorHistory | IPatient;
  isPast?: boolean;
  handleJoin?: () => void;
}
const TabContent = ({
  appointment,
  linkedTo,
  isPast,
  handleJoin,
}: TabContentProps) => {
  return (
    <ListItem
      key={appointment.id}
      secondaryAction={!isPast && <button onClick={handleJoin}>Join</button>}
    >
      <ListItemAvatar>
        <Avatar
          alt={linkedTo.name}
          src={digicareConfig.webPort + linkedTo.profile_pic}
        />
      </ListItemAvatar>
      <ListItemText
        primary={linkedTo.name}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {appointment.date.toLocaleString()}
            </Typography>
            {` — ${appointment.description}`}
          </React.Fragment>
        }
      />
    </ListItem>
  );
};
