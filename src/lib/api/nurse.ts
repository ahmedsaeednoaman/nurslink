import { api } from './core'

export const getNurses = async () => {
  const response = await api.get('/v1/nurses')
  return response.data
}

export const createNurse = async (nurse: any) => {
  const response = await api.post('/v1/nurses', nurse)
  return response.data
}
