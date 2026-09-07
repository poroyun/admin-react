import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../store/store"
import { useNavigate } from "react-router-dom"
import { logout } from "../store/slices/authSlice"

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
    navigate('/login')
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