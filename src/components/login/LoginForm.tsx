import { Box, Button, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import LockIcon from '@mui/icons-material/Lock'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import PeopleIcon from '@mui/icons-material/People'
import { useState } from 'react'
import AppAlert from "@/components/common/alert/AppAlert"

interface LoginFormProps {
  userId: string
  password: string
  onUserIdChange: (value: string) => void
  onPasswordChange: (value: string) => void
  onLogin: () => void
  loginError: boolean
}

function LoginForm({
  userId,
  password,
  onUserIdChange,
  onPasswordChange,
  onLogin,
  loginError
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box
      className="flex min-h-screen items-center justify-center px-4"
      sx={{
        bgcolor: 'background.default',
      }}
    >
      <Box
        className="w-full max-w-md rounded-3xl p-10"
        sx={{
          bgcolor: 'background.paper',
          border: 1,
          borderColor: 'divider',
        }}
      >
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 text-violet-500 ring-1 ring-inset ring-violet-100/50">
            <span className="flex items-center justify-center">
              <PeopleIcon/>
            </span>
          </div>

          <Typography
            variant='h4'
            component='h1'
            sx={{
              fontWeight: 700,
            }}
          >
            Admin
          </Typography>

          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              mt: 1,
            }}
          >
            관리자 계정으로 로그인하세요.
          </Typography>
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

          {loginError && (
            <AppAlert
              message='아이디 또는 비밀번호가 일치하지 않습니다.'
              severity='error'
            />
          )}

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

      </Box>
    </Box>
  )
}

export default LoginForm
