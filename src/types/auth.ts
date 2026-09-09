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