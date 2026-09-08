// auth
// ├── isLoggedIn    → 로그인했는가?
// └── user          → 로그인한 사용자 정보

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
  email: string
}

interface AuthState {
  isLoggedIn: boolean
  user: User | null
}

const savedUser = sessionStorage.getItem('user')

const initialState: AuthState = {
  isLoggedIn: !!savedUser,
  user: savedUser ? JSON.parse(savedUser) : null,
}

// !! : 값을 true/false로 바꾸는 표현
// JSON.parse() : 문자열 형태로 저장했던 객체를 복구

// 처음 켰을 때 상태
// const initialState: AuthState = {
//   isLoggedIn: false,
//   user: null,
// }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true
      state.user = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = null
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
