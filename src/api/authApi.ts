import type { LoginRequest, LoginResponse } from '@/types/auth'
import axiosInstance from './axiosInstance'

export const loginApi = async (
  data: LoginRequest,
): Promise<LoginResponse | undefined> => {
  const response = await axiosInstance.get<LoginResponse[]>(
    '/users',
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