import { api } from './core'

export const getHospitals = async () => {
  const response = await api.get('/v1/hospitals')
  return response.data
}

export const createHospital = async (hospital: any) => {
  const response = await api.post('/v1/hospitals', hospital)
  return response.data
}
