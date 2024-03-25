import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { IDoctorHistory } from "../../doctorHistory/interface";
import DigicareDatePicker from "../../common/components/DigiDatePicker";
import { digicareConfig } from "../../../assets/constants/config";
import "./style.scss";
import { bookAppointmentDummyData } from "../../../dummyData/bookAppointment";
import { IDoctorTimeSlots } from "../interface";
import { AppContext } from "../../../context/app";
import { ContextProps } from "../../../context/interface";
import { IPatient } from "../../avatarPopOverContent/interface";
import { getDoctorByUsername } from "../../../api/doctor";

export const MBookAPpointment = () => {
  const { user } = useContext(AppContext) as ContextProps;
  const [selectedDoctor, setSelectedDoctor] = useState<string>("");
  const [selectedHospital, setSelectedHospital] = useState<string>("");
  const [appointmentDate, setAppointmentDate] = useState<Date | null>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [desc, setDesc] = useState<string>();
  const [patientRecord, setPatientRecord] = useState<IDoctorHistory[]>([]);

  useMemo(() => {
    setPatientRecord([]);
    (user as IPatient).doctors.forEach((doctorUsername) => {
      getDoctorByUsername(doctorUsername).then((res) => {
        const patientRecordClone = patientRecord.slice();
        patientRecordClone.push(res.data.data);
        setPatientRecord(patientRecordClone);
      });
    });
  }, [user.user_name]);

  useEffect(() => {
    setSelectedDoctor("");
  }, [selectedHospital]);

  useEffect(() => {
    setAppointmentDate(null);
  }, [selectedDoctor]);

  useEffect(() => {
    setSelectedTime("");
  }, [appointmentDate]);

  const getHospitalsList = useMemo(() => {
    return patientRecord?.map((data) => {
      return { id: data.user_name, name: data.Hospital };
    });
  }, [patientRecord]);

  const getDoctorList = () => {
    return patientRecord
      ?.filter((data) => {
        if (selectedHospital) return data.Hospital === selectedHospital;
        else return true;
      })
      .map((data) => {
        return { id: data.user_name, name: data.name };
      });
  };

  const getTimeList = () => {
    const doctorAppointment = bookAppointmentDummyData?.find((record) => {
      return record.doctor_username === selectedDoctor;
    });
    return doctorAppointment?.online_availability?.days.find((days) => {
      return (
        days.name === digicareConfig.days[appointmentDate?.getDay() + 1].value
      );
    })?.time_slots;
  };

  const handleHospitalChange = (event: any) => {
    setSelectedHospital(event.target.value);
  };

  const handleDoctorChange = (event: any) => {
    setSelectedDoctor(event.target.value);
  };

  const handleDateChange = (value: Date | null) => {
    setAppointmentDate(new Date(value));
  };

  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value as string);
  };

  const handleMenuItemTimeClick = (time: IDoctorTimeSlots) => {
    var date = Object.assign(appointmentDate, {});
    date.setHours(Number(time.start_time.split(":")[0]));
    date.setMinutes(Number(time.start_time.split(":")[1]));
    setAppointmentDate(date);
  };

  const handleDescriptionChange = (e: any) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedDoctor && appointmentDate && selectedTime && selectedHospital) {
      setSelectedHospital("");
      setSelectedDoctor("");
      setAppointmentDate(null);
      setSelectedTime("");
      setDesc("");
    } else {
      alert("Please select hospital, doctor, appointment date, and time.");
    }
  };

  return (
    <Container className="appointment-container">
      <Typography variant="h4" gutterBottom marginBottom={2}>
        Book an Appointment
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel className="select-label">Select Hospital</InputLabel>
              <Select
                value={selectedHospital}
                onChange={handleHospitalChange}
                required
              >
                <MenuItem value="">Select Hospital</MenuItem>
                {getHospitalsList?.map((hospital) => (
                  <MenuItem key={hospital.id} value={hospital.name}>
                    {hospital.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth required>
              <InputLabel className="select-label" >Select Doctor</InputLabel>
              <Select
                value={selectedDoctor}
                onChange={handleDoctorChange}
                required
              >
                <MenuItem value="">Select Doctor</MenuItem>
                {getDoctorList()?.map((doctor) => (
                  <MenuItem key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <DigicareDatePicker
              label="Appointment Date*"
              handleDateChange={handleDateChange}
              value={appointmentDate}
              minDate={0}
              maxDate={7}
              className="book-an-appointment-date-picker"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required fullWidth>
              <InputLabel className="select-label" >Select Time</InputLabel>
              <Select value={selectedTime} onChange={handleTimeChange} required>
                <MenuItem value="">Select Time</MenuItem>
                {getTimeList()?.map((time) => (
                  <MenuItem
                    key={time._id}
                    value={time._id}
                    disabled={time.isBooked}
                    onClick={() => handleMenuItemTimeClick(time)}
                  >
                    {time.start_time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              rows={6}
              multiline
              label="Add Details"
              value={desc}
              onChange={handleDescriptionChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Book Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
