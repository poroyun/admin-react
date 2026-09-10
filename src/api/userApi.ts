import axios from "axios";
import { API_BASE_URL } from './apiConfig'
import type { User } from '@/types/user'

export const getUsersApi = async () => {
  const response = await axios.get<User[]>(`${API_BASE_URL}/users`)

  return response.data
}