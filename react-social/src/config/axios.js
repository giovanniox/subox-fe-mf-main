import axios from 'axios'
import { API_BASE_URL, ACCESS_TOKEN } from './../constants/index'

const clientAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

clientAxios.interceptors.request.use(function (config) {
  const token = localStorage.getItem(ACCESS_TOKEN)
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

export default clientAxios
