import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import type { Dayjs } from "dayjs";

interface DatePickerProps {
  label?: string
  value: Dayjs | null
  onChange: (date: Dayjs | null) => void
  format?: string
  fullWidth?: boolean
}

export const DatePicker = ({
  label,
  value,
  onChange,
  format = 'YYYY-MM-DD',
  fullWidth = false,
}: DatePickerProps) => {
  return (
    <MuiDatePicker
      label={label}
      value={value}
      onChange={onChange}
      format={format}
      slotProps={{
        textField: {
          fullWidth,
        },
      }}
    />
  )
}