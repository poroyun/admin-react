import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import PeopleIcon from '@mui/icons-material/People'
import { useState } from 'react'

interface LoginFormProps {
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
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-violet-50 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-violet-100/50">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 text-violet-500 ring-1 ring-inset ring-violet-100/50">
            <span className="flex items-center justify-center">
              <PeopleIcon/>
            </span>
          </div>

          <h1 className="text-3xl font-bold text-slate-900">Admin</h1>

          <p className="mt-2 text-sm text-slate-500">
            관리자 계정으로 로그인하세요.
          </p>
        </div>

        <div className="space-y-4">
          <TextField
            id="userId"
            label="아이디"
            placeholder="아이디를 입력하세요."
            value={userId}
            onChange={(e) => onUserIdChange(e.target.value)}
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }
            }}
          />
          <TextField
            id="password"
            label="비밀번호"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder="비밀번호를 입력하세요."
            fullWidth
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label={
                        showPassword ? '비밀번호 숨기기' : '비밀번호 보기'
                      }
                    >
                      {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            }}
          />

        </div>

        <div className='mt-8'>
          <Button
            variant="contained"
            size="large"
            type="button"
            onClick={onLogin}
            fullWidth
          >
            로그인
          </Button>
        </div>

      </div>
    </div>
  )
}

export default LoginForm
