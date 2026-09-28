import { useContext } from 'react'
import { ThemeModeContext } from '@/theme/AppThemeProvider'
import { Avatar, Box, Button, IconButton } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'


interface AdminHeaderProps {
  userName: string
  onLogout: () => void
}

function AdminHeader({
  userName,
  onLogout
}: AdminHeaderProps) {
  const themeMode = useContext(ThemeModeContext)

  if(!themeMode) {
    return null
  }

  const { mode, toggleMode } = themeMode
  return (
    <Box
      component="header"
      className="flex h-16 items-center justify-end gap-4 px-6"
      sx={{
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider"
      }}
    >
      <IconButton
        onClick={toggleMode}
        aria-label="다크모드 전환"
      >
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
      <Avatar
        sx={{
          width: 32,
          height: 32,
        }}
      >
        {userName.charAt(0)}
      </Avatar>
      <p>{userName}님 환영합니다!</p>
      <Button
        variant="outlined"
        size="small"
        onClick={onLogout}>
          로그아웃
        </Button>
    </Box>
  )
}

export default AdminHeader