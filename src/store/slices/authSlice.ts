// auth
// ├── isLoggedIn    → 로그인 여부
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

// 처음 켰을 때 상태 <- 를 세션스토리지의 로그인 정보 유무에 따라 바뀌게 변경
// const initialState: AuthState = {
//   isLoggedIn: false,
//   user: null,
// }

const savedUser = sessionStorage.getItem('user')

const initialState: AuthState = {
  isLoggedIn: !!savedUser,
  user: savedUser ? JSON.parse(savedUser) : null,
}

// !! : 값을 true/false로 바꾸는 표현
// JSON.parse() : 문자열 형태로 저장했던 객체를 복구

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

// 새로고침
//    ↓
// Redux 초기 상태
//    ↓
// sessionStorage 확인
//    ↓
// 기존 로그인 정보 발견
//    ↓
// 로그인 상태 복구