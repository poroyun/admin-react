// date
// → 날짜만 표시

// datetime-minute
// → 시간 목록 24시간제
// → 시/분 선택 후 닫힘

// datetime-second
// → 시간 목록 24시간제
// → 시/분 선택 후 유지
// → 초 선택 후 닫힘

import { useRef } from "react";
import { ko } from 'date-fns/locale'
import ReactDatePicker, { registerLocale } from "react-datepicker";

import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.css'

import type { DatePickerMode } from "./types";


registerLocale('ko', ko)

interface DatePickerProps {
  mode: DatePickerMode
  value: Date | null
  onChange: (date: Date | null) => void
  minDate?: Date
  maxDate?: Date
}

export const DatePicker = ({
  mode,
  value,
  onChange,
  minDate,
  maxDate
}: DatePickerProps) => {
  
  const datePickerRef = useRef<ReactDatePicker>(null)
  
  const showTimeSelect = mode !== 'date'
  
  const seconds = value?.getSeconds() ?? 0
  
  const dateFormat = 
  mode === 'date'
  ? 'yyyy-MM-dd'
  : mode === 'datetime-minute'
  ? 'yyyy-MM-dd HH:mm'
  : 'yyyy-MM-dd HH:mm:ss'
  
  // 오늘 날짜로 placeholder
  const today = new Date()
  
  const tYear = today.getFullYear()
  const tMonth = String(today.getMonth() + 1).padStart(2, '0')
  const tDay = String(today.getDate()).padStart(2, '0')
  
  const todayPlaceholder =
    mode === 'date'
      ? `${tYear}-${tMonth}-${tDay}`
      : mode === 'datetime-minute'
        ? `${tYear}-${tMonth}-${tDay} 00:00`
        : `${tYear}-${tMonth}-${tDay} 00:00:00`
  
  return (
    <ReactDatePicker
      className="h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-300 hover:enabled:border-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500"
      wrapperClassName="admin-datepicker-wrapper w-full min-w-0"
      calendarClassName="admin-datepicker"
      popperClassName="admin-datepicker-popper"
      locale="ko"
      dateFormatCalendar="yyyy년 MM월"
      timeCaption="시간"
      ref={datePickerRef}
      placeholderText={todayPlaceholder}
      selected={value}
      onChange={onChange}
      showTimeSelect={showTimeSelect}
      dateFormat={dateFormat}
      timeFormat="HH:mm"
      minDate={minDate}
      maxDate={maxDate}
      timeIntervals={1} // 시간 선택에서 분 간격
      shouldCloseOnSelect={mode !== 'datetime-second'} // 초 선택이 커스텀이라서 datetime-second 캘린더에서 시/분 선택했을 때 닫히지 않게
    >
    {mode === 'datetime-second' && (
      <div className="flex items-center gap-4 border-t border-slate-200 bg-slate-50 px-4 py-3">
        <label className="text-sm font-semibold text-slate-700">초</label>
        <select
          aria-label="초"
          className="admin-datepicker-seconds h-8 min-w-20 cursor-pointer rounded-xl border border-slate-300 bg-white py-0 pl-3 pr-10 text-sm text-slate-900 outline-none transition-colors hover:border-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
          value={seconds}
          onChange={(e) => {
            if (!value) return
            
            const nextDate = new Date(value)
            nextDate.setSeconds(Number(e.target.value))

            onChange(nextDate)
            datePickerRef.current?.setOpen(false)
          }}
          >
          {Array.from({ length: 60 }, (_, second) => (
            <option key={second} value={second}>
              {String(second).padStart(2, '0')}
            </option>
          ))}
        </select>
      </div>
    )}
    </ReactDatePicker>
  )
}
