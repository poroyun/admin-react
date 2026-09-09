import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginApi } from "@/api/authApi"
import { login } from "@/store/slices/authSlice"
import type { AppDispatch } from "@/store/store"

function Login() {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleLogin = async () => {
    const user = await loginApi({
      userId,
      password,
    })

    if (!user) {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.')
      return
    }

    const loginUser = {
      id: Number(user.id),
      name: user.name,
      email: user.email,
    }

    dispatch(
      login(loginUser),
    )

    sessionStorage.setItem('user', JSON.stringify(loginUser))
    // sessionStorage : 브라우저가 제공하는 저장 공간
    // setItem() : 값을 저장하는 함수

    // sessionStorage에는 객체를 그대로 넣을 수 없으므로
    // JSON.stringify()를 사용해서 [객체를 문자열 형태로 변환해서 저장]함

    navigate('/admin')
  }

  return (
    <div>
      <h1>Admin 로그인</h1>

      <div>
        <label htmlFor="userId">아이디</label>
        <input
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin}>로그인</button>
    </div>
  )
}

export default Login