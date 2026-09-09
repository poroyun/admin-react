interface LoginFormProps{
  userId: string
  password: string
  onUserIdChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onLogin: () => void
}

function LoginForm({
  userId,
  password,
  onUserIdChange,
  onPasswordChange,
  onLogin
}: LoginFormProps) {
  return (
    <div>
      <h1>Admin 로그인</h1>
      <input
        value={userId}
        onChange={(e) => onUserIdChange(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => onPasswordChange(e.target.value)}
      />
      <button onClick={onLogin}>로그인</button>
    </div>
  )
}

export default LoginForm