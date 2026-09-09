import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import type { AppDispatch, RootState } from "../store/store"
import { logout } from "../store/slices/authSlice"

function Admin() {
  // 관리자 정보 가져오기
  const user = ((state: RootState) => state.auth.user)
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
    <div>
      <h1>Admin</h1>
      <p>로그인 상태: {isLoggedIn ? '로그인됨' : '로그아웃됨'}</p>
      {user && <p>{user.name}님 환영합니다!</p>}
      <button onClick={handleLogout}>로그아웃</button>
    </div>
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