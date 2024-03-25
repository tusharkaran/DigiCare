import { Button, Grid } from "@mui/material";
import { useState } from "react";
import DigiCareAutocomplete from "../../common/components/DigicareAutoComplete";
import { digicareConfig } from "../../../assets/constants/config";
import { DigicareTimePicker } from "../../common/components/DigicareTimePicker";
import { DigicareAutoCompleteDataProps } from "../../common/interface/DigicareAutoComplete";
import "./style.scss";
import dayjs from "dayjs";

interface AppointmentSchedule {
  name: string;
  start_time: string;
  end_time: string;
}

export const MAddSchedule = () => {
  const [daysOptions, setDaysOptions] = useState<
    DigicareAutoCompleteDataProps[]
  >(digicareConfig.days);
  const [appointmentSchedule, setAppointmentSchedule] = useState<
    Array<AppointmentSchedule>
  >([
    {
      name: "",
      start_time: "",
      end_time: "",
    },
  ]);

  const handleAddInput = () => {
    setAppointmentSchedule([
      ...appointmentSchedule,
      { name: "", start_time: "", end_time: "" },
    ]);
  };

  const handleStartTime = (event: any, index: number) => {
    const start_time = `${new Date(event).getHours()}:${new Date(event).getMinutes()}`;
    addOrUpdate("start_time", start_time, index);
  };

  const handleEndTime = (event: any, index: number) => {
    const end_time = `${new Date(event).getHours()}:${new Date(event).getMinutes()}`;
    addOrUpdate("end_time", end_time, index);
  };

  const handleDeleteInput = (index) => {
    const newArray = [...appointmentSchedule];
    newArray.splice(index, 1);
    setAppointmentSchedule(newArray);
  };

  const handleAutoCompleteChange = (
    value: DigicareAutoCompleteDataProps,
    index: number,
  ) => {
    addOrUpdate("name", value.value as string, index);
  };

  const addOrUpdate = (refField: string, value: string, index: number) => {
    const ref = appointmentSchedule.slice();
    ref[index] = { ...ref[index], [refField]: value } as AppointmentSchedule;
    setAppointmentSchedule(ref);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // return
    // console.log(appointmentSchedule)
  };

  const handleFocus = () => {
    const selectedDays = appointmentSchedule.map((a) => a.name);
    const daysOptionsDummy = daysOptions.map((d) => {
      if (selectedDays.includes(d.value as string)) {
        return { ...d, disabled: true };
      } else return { ...d, disabled: false };
    });
    setDaysOptions(daysOptionsDummy);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {appointmentSchedule.map((item, index) => (
          <Grid container spacing={2} className="add-schedule-doctor-grid">
            <Grid item xs={3} alignItems={"flex-end"}>
              <DigiCareAutocomplete
                data={daysOptions}
                handleAutocompleteChange={(v: DigicareAutoCompleteDataProps) =>
                  handleAutoCompleteChange(v, index)
                }
                placeHolder={"Week day"}
                unsorted={true}
                handleFocus={handleFocus}
              />
            </Grid>
            <Grid item>
              <DigicareTimePicker
                name="start_time"
                handleChange={(v) => handleStartTime(v, index)}
              />
            </Grid>
            <Grid item>
              <DigicareTimePicker
                name="end_time"
                handleChange={(v) => handleEndTime(v, index)}
                minTime={dayjs()
                  .set(
                    "hour",
                    appointmentSchedule[index].start_time?.length
                      ? (appointmentSchedule[index].start_time.split(
                          ":",
                        )[0] as unknown as number)
                      : 0,
                  )
                  .set(
                    "minute",
                    appointmentSchedule[index].start_time?.length
                      ? (appointmentSchedule[index].start_time.split(
                          ":",
                        )[1] as unknown as number)
                      : 0,
                  )}
              />
            </Grid>
            <Grid item>
              {appointmentSchedule.length > 1 && (
                <Button onClick={() => handleDeleteInput(index)}>Delete</Button>
              )}
            </Grid>
          </Grid>
        ))}
        <Grid container gap={2} className="add-schedule-doctor-grid">
          <Button
            disabled={appointmentSchedule.length === 7}
            style={{ marginTop: "1rem" }}
            onClick={handleAddInput}
            variant="contained"
            color="success"
          >
            Add More
          </Button>
          <Button
            style={{ marginTop: "1rem" }}
            type={"submit"}
            variant="contained"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
};
