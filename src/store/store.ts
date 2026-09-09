import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

// configureStore : Redux의 중앙 저장소(Store)를 만드는 함수
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
// RootState : Redux Store 전체 상태의 타입, Redux에서 값을 읽을 때
// AppDispatch : Redux dispatch의 타입, Redux에 변경을 보낼 때