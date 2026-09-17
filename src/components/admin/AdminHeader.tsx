import Button from '@mui/material/Button'

interface AdminHeaderProps {
  userName: string
  onLogout: () => void
}

function AdminHeader({
  userName,
  onLogout
}: AdminHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-end gap-4 border-b border-slate-200 bg-white px-6">
      <p>{userName}님 환영합니다!</p>
      <Button
        variant="outlined"
        size="small"
        onClick={onLogout}>
          로그아웃
        </Button>
    </header>
  )
}

export default AdminHeader