import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import type { AppDispatch, RootState } from "@/store/store"
import { logout } from "@/store/slices/authSlice"
import AdminLayout from "@/components/admin/AdminLayout"

function Admin() {
  // 관리자 정보 가져오기
  const user = useSelector((state: RootState) => state.auth.user)
  // 로그인 여부 가져오기
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isLoggedIn,
  )

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  return (
    <AdminLayout
      isLoggedIn={isLoggedIn}
      userName={user?.name ?? ''}
      // user?.name ?? ''
      // user가 있으면 → user.name
      // user가 없으면 → 빈 문자열 ''
      onLogout={handleLogout}
    />
  ) 
}

export default Admin

// useNavigate
// → "버튼 클릭 같은 동작 후 이동해!"
// → 함수 방식
// → navigate('/login')


// Navigate
// → "지금 이 화면 보여줘도 돼?"
// → 조건부 렌더링 방식
// → <Navigate to="/login" />