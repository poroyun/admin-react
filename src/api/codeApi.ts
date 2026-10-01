import axiosInstance from "./axiosInstance";
import type { Code } from '@/types/code'

export const getCodesApi = async (): Promise<Code[]> => {
  const response = await axiosInstance.get<Code[]>('/codes')

  return response.data
}