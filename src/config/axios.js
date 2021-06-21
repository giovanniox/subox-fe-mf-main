import axios from 'axios';

const clienteAxios = axios.create({
  baseURL: 'http://localhost:8090'
});

export const data = (credentials) => {
  const params = {
    "grant_type": "password",
    "username": credentials.username,
    "password": credentials.password,
  }
  return Object.keys(params).map((key) => `${key}=${encodeURIComponent(params[key])}`).join('&');
}

export const USER_ID_APP = "suboxApp"
export const PASSWORD_APP = "123123"
export default clienteAxios;