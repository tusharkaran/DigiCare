import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DigicareTimePickerProps } from "../interface/DigicareTimePicker";

export const DigicareTimePicker = ({
  label,
  handleChange,
  name,
  disabled,
  className,
  minTime,
}: DigicareTimePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        onChange={handleChange}
        name={name}
        className={className}
        disabled={disabled}
        minTime={minTime}
        label={label}
      />
    </LocalizationProvider>
  );
};
