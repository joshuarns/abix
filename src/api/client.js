import axios from 'axios'
import { config } from '@/config/env'

export const apiClient = axios.create({
  baseURL: config.apiBaseUrl,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

apiClient.interceptors.request.use((req) => {
  // Attach auth token or session cookie here when auth is added
  return req
})

apiClient.interceptors.response.use(
  (res) => res.data,
  (error) => {
    const message = error.response?.data?.error?.message ?? error.message
    return Promise.reject(new Error(message))
  }
)
