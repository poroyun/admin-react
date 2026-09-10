import axios from "axios";
import { API_BASE_URL } from './apiConfig'
import type { User } from '@/types/user'

export const getUsersApi = async () => {
  const response = await axios.get<User[]>(`${API_BASE_URL}/users`)
  return response.data
}

export const getUserApi = async (id: string) => {
  const response = await axios.get<User>(`${API_BASE_URL}/users/${id}`)
  return response.data
}

export const createUserApi = async (data: Omit<User, 'id'>) => {
  const response = await axios.post<User>(`${API_BASE_URL}/users/`, data)
  return response.data
}

export const updateUserApi = async (
  id: string,
  data: Omit<User, 'id' | 'userId'>
) => {
  const response = await axios.patch<User>(`${API_BASE_URL}/users/${id}`, data)
  return response.data
}