import axiosInstance from "./axiosInstance";
import type { Code } from '@/types/code'

export const getCodesApi = async (): Promise<Code[]> => {
  const response = await axiosInstance.get<Code[]>('/codes')

  return response.data
}

export const updateCodeApi = async (
  id: string,
  data: Partial<Code>,
): Promise<Code> => {
  const response = await axiosInstance.patch<Code>(
    `/codes/${id}`,
    data,
  )

  return response.data
}

export const createCodeApi = async (
  data: Omit<Code, 'id'>,
): Promise<Code> => {
  const response = await axiosInstance.post<Code>(
    '/codes',
    data
  )

  return response.data
}