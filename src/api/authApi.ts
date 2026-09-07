import axios from "axios";

export interface LoginRequest {
  userId: string
  password: String
}

export interface LoginResponse {
  id: number
  userId: string
  password: string
  name: string
  email: string
}

export const loginApi = async (data: LoginRequest) => {
  const response = await axios.get<LoginResponse[]>(
    'http://localhost:3000/users',
    {
      params: {
        userId: data.userId,
      }
    },
  )

  console.log('아이디 조회 결과:', response.data)

  const user = response.data[0]

  if (!user) {
    return undefined
  }

  if (user.password !== data.password) {
    return undefined
  }

  return user
}