import axiosInstance from './axiosInstance'
import type { User } from '@/types/user'

export const getUsersApi = async () => {
  const response = await axiosInstance.get<User[]>('/users')
  return response.data
}

export const getUserApi = async (id: string) => {
  const response = await axiosInstance.get<User>(`/users/${id}`)
  return response.data
}

export const createUserApi = async (data: Omit<User, 'id'>) => {
  const response = await axiosInstance.post<User>('/users/', data)
  return response.data
}

export const updateUserApi = async (
  id: string,
  data: Omit<User, 'id' | 'userId'>
) => {
  const response = await axiosInstance.patch<User>(`/users/${id}`, data)
  return response.data
}