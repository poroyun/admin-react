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
    <div>

      <div>

        <div>
          <label htmlFor="name">이름</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="userId">아이디</label>
          <input
            id="userId"
            type="text"
            value={userId}
            onChange={(e) => onUserIdChange(e.target.value)}
            disabled={isEdit}
          />
        </div>

        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="birthDate">생년월일</label>
          <input
            id="birthDate"
            type="text"
            value={birthDate}
            onChange={(e) => onBirthDateChange(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="joinDate">입사일</label>
          <input
            id="joinDate"
            type="text"
            value={joinDate}
            onChange={(e) => onJoinDateChange(e.target.value)}
          />
        </div>
      </div>

      <div>
        <button type="button" onClick={onCancel}>취소</button>
        <button type="button" onClick={onSubmit}>{submitLabel}</button>
      </div>

    </div>
  )
}

export default UserForm