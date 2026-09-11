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
        <div className="min-w-0 space-y-2">
          <label
            className="block text-sm font-semibold text-slate-700"
            htmlFor="name"
          >
            이름
          </label>
          <input
            className="h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-500"
            id="name"
            placeholder="이름을 입력하세요."
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>

        <div className="min-w-0 space-y-2">
          <label
            className="block text-sm font-semibold text-slate-700"
            htmlFor="userId"
          >
            아이디
          </label>
          <input
            className="h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-500"
            id="userId"
            placeholder="아이디를 입력하세요."
            type="text"
            value={userId}
            onChange={(e) => onUserIdChange(e.target.value)}
            disabled={isEdit}
          />
        </div>

        <div className="min-w-0 space-y-2 sm:col-span-2">
          <label
            className="block text-sm font-semibold text-slate-700"
            htmlFor="email"
          >
            이메일
          </label>
          <input
            className="h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-500"
            id="email"
            placeholder="이메일을 입력하세요."
            type="text"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
        </div>

        <div className="min-w-0 space-y-2">
          <label
            className="block text-sm font-semibold text-slate-700"
            htmlFor="birthDate"
          >
            생년월일
          </label>
          <input
            className="h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-500"
            id="birthDate"
            type="text"
            value={birthDate}
            onChange={(e) => onBirthDateChange(e.target.value)}
          />
        </div>

        <div className="min-w-0 space-y-2">
          <label
            className="block text-sm font-semibold text-slate-700"
            htmlFor="joinDate"
          >
            입사일
          </label>
          <input
            className="h-12 w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-2 text-base text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-100 disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:text-slate-500"
            id="joinDate"
            type="text"
            value={joinDate}
            onChange={(e) => onJoinDateChange(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
        <button
          className="h-10 cursor-pointer rounded-xl border border-slate-300 bg-white px-6 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          type="button"
          onClick={onCancel}
        >
          취소
        </button>
        <button
          className="h-10 cursor-pointer rounded-xl bg-violet-500 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-violet-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500"
          type="button"
          onClick={onSubmit}
        >
          {submitLabel}
        </button>
      </div>
    </div>
  )
}

export default UserForm
