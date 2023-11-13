import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerAtomProps {
  onChange: () => void;
}

export default function DatePickerAtom({ onChange }: DatePickerAtomProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker defaultValue={dayjs()} onChange={onChange} />
    </LocalizationProvider>
  );
}
