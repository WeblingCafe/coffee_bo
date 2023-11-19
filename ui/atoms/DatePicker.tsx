import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerAtomProps {
  selectedDate: Date;
  onChange: (value: Date) => void;
}

export default function DatePickerAtom({
  selectedDate,
  onChange,
}: DatePickerAtomProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
      <DatePicker
        defaultValue={dayjs()}
        format="YYYY년 MM월 DD일"
        // label=""
        value={selectedDate}
        onChange={onChange}
      />
    </LocalizationProvider>
  );
}
