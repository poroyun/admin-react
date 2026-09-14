import { DatePicker } from "./DatePicker";
import type { DatePickerMode } from './types'

interface DateRangePickerProps {
  mode: DatePickerMode
  startDate: Date | null
  endDate: Date | null
  onStartDateChange: (date: Date | null) => void
  onEndDateChange: (date: Date | null) => void
}

export const DateRangePicker = ({
  mode,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}: DateRangePickerProps) => {
  return (
    <div className="flex flex-col gap-x-4 gap-y-6 sm:flex-row sm:items-end sm:gap-3">
      <div className="min-w-0 flex-1">
        <label className="block text-sm font-semibold text-slate-700">
          시작일
        </label>

        <DatePicker
          mode={mode}
          value={startDate}
          onChange={onStartDateChange}
          maxDate={endDate ?? undefined}
        />
      </div>

      <span className="hidden h-12 items-center text-slate-400 sm:flex">
        –
      </span>

      <div className="min-w-0 flex-1">
        <label className="block text-sm font-semibold text-slate-700">
          종료일
        </label>

        <DatePicker
          mode={mode}
          value={endDate}
          onChange={onEndDateChange}
          minDate={startDate ?? undefined}
        />
      </div>
    </div>
  )
}