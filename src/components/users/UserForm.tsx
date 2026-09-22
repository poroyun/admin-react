import { Button, TextField } from "@mui/material"
import { DatePicker } from "@/components/common/date-picker/DatePicker"
import dayjs from 'dayjs'

interface UserFormProps {
  name: string
  userId: string
  email: string
  birthDate: string
  joinDate: string
  onNameChange: (value: string) => void
  onUserIdChange: (value: string) => void
  onEmailChange: (value: string) => void
  onBirthDateChange: (value: string) => void
  onJoinDateChange: (value: string) => void
  onCancel: () => void
  onSubmit: () => void
  submitLabel: string
  isEdit?: boolean
}

function UserForm({
  name,
  userId,
  email,
  birthDate,
  joinDate,
  onNameChange,
  onUserIdChange,
  onEmailChange,
  onBirthDateChange,
  onJoinDateChange,
  onCancel,
  onSubmit,
  submitLabel,
  isEdit = false,
}: UserFormProps) {

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/40 sm:p-8">
      <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
        <div className="min-w-0">
          <TextField
            id="name"
            label="이름"
            placeholder="이름을 입력하세요."
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            fullWidth
          />
        </div>

        <div className="min-w-0">
          <TextField
            id="userId"
            label="아이디"
            placeholder="아이디를 입력하세요."
            value={userId}
            onChange={(e) => onUserIdChange(e.target.value)}
            disabled={isEdit}
            fullWidth
          />
        </div>

        <div className="min-w-0 sm:col-span-2">
          <TextField
            id="email"
            label="이메일"
            placeholder="이메일을 입력하세요."
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            fullWidth
          />
        </div>

        <div className="min-w-0">
          <DatePicker
            label="생년월일"
            value={birthDate ? dayjs(birthDate) : null}
            onChange={(date) => {
              onBirthDateChange(date ? date.format("YYYY-MM-DD") : '')
            }}
            fullWidth
          />
        </div>

        <div className="min-w-0">
          <DatePicker
            label="입사일"
            value={joinDate ? dayjs(joinDate) : null}
            onChange={(date) => {
              onJoinDateChange(date ? date.format("YYYY-MM-DD") : '')
            }}
            fullWidth
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
        <Button
          variant="outlined"
          type="button"
          onClick={onCancel}
        >
          취소
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={onSubmit}
        >
          {submitLabel}
        </Button>
      </div>
    </div>
  )
}

export default UserForm
