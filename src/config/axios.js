import axios from 'axios'
import { API_BASE_URL, ACCESS_TOKEN } from '../constants/index'

export const URLS = {
  AUTH_SIGN_UP: '/auth/signup',
  AUTH_SIGN_IN: '/auth/login',
}

const clienteAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

clienteAxios.interceptors.request.use(function (config) {
  const token = localStorage.getItem(ACCESS_TOKEN)
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

export default clienteAxios
