import axios from "axios";
import { API_BASE_URL } from './apiConfig'
import type { LoginRequest, LoginResponse } from '../types/auth'

export const loginApi = async (data: LoginRequest) => {
  const response = await axios.get<LoginResponse[]>(
    `${API_BASE_URL}/users`,
    {
      params: {
        userId: data.userId,
      }
    },
  )

  const user = response.data[0]

  if (!user) {
    return undefined
  }

  if (user.password !== data.password) {
    return undefined
  }

  return user
}