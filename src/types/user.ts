export interface User {
  id: string
  name: string
  email: string
  role: "admin" | "nurse" | "hospital"
  createdAt?: Date
  updatedAt?: Date
}
