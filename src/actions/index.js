import { AUTH_USER } from './types';
import axios from 'axios';

export const signup = (formProps, callback) => async dispatch => {
  const response = await axios.post('http://localhost:8000/api/auth/jwt/', formProps);

  dispatch({ type : AUTH_USER, payload: response.data.token });
  localStorage.setItem('token', response.data.token);
  callback();
};
