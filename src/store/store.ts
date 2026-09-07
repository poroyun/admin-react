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