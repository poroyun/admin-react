interface AdminLayoutProps {
  isLoggedIn: boolean
  userName: string
  onLogout: () => void
}

function AdminLayout({
  isLoggedIn,
  userName,
  onLogout
}: AdminLayoutProps) {
  return (
    <div>
      <h1>Admin</h1>
       <p>로그인 상태: {isLoggedIn ? '로그인됨' : '로그아웃됨'}</p>
       <p>{userName}님 환영합니다!</p>
       <button onClick={onLogout}>로그아웃</button>
    </div>
  )
}

export default AdminLayout