import { AUTH_TYPE } from '../types/authType'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/AuthProvider";
import axios from 'axios';


const URL_AUTH_LOGIN = 'http://localhost:7000/api/auth/login';
const URL_AUTH_REGISTER = 'http://localhost:7000/api/auth/register';


const login = (loginData, setToken, navigate) => {
  return async (dispatch) => {
      // First dispatching the initial LOGIN action
      dispatch(LOGIN(loginData));

      try {
          const response = await axios.post(URL_AUTH_LOGIN, loginData, {
              headers: {
                  'Content-Type': 'application/json'
              }
          });

          if (response.status === 200) {
              alert('Registro exitoso');
              console.log(response.data.token);
              setToken(response.data.token);
              dispatch(LOGIN(response.data.token));
              navigate("/", { replace: true });
              
              // Dispatching LOGIN with the AUTH data after a successful fetch
              
          } else {
              alert('Error en el registro');
              dispatch(LOGIN(null));
          }
      } catch (error) {
          console.log('Error en la solicitud:', error);
          dispatch(LOGIN(null));
      }
  };
};

const register = () => {
  // Implementation for register
};

const AUTH_ACTIONS = {
  login,
  register
};

export { AUTH_ACTIONS };

const LOGIN = (loginData) => ({
  type: AUTH_TYPE.LOGIN,
  payload: loginData
});

const REGISTER = (registro) => ({
  type: AUTH_TYPE.REGISTER,
  payload: registro
});


