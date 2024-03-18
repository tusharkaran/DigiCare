import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DigicareDatePickerProps } from "../interface/DigiDatePicker";
import dayjs, { Dayjs } from "dayjs";

export default function DigicareDatePicker({
  label,
  handleDateChange,
  value,
  minDate,
  maxDate,
  className,
}: DigicareDatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* <DemoContainer components={["DatePicker"]}> */}
      <DatePicker<Date | Dayjs>
        className={className}
        label={label}
        onChange={handleDateChange}
        value={value}
        minDate={dayjs().subtract(minDate, "days")}
        maxDate={dayjs().add(maxDate, "days")}
      />
      {/* </DemoContainer> */}
    </LocalizationProvider>
  );
}
