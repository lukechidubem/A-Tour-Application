/* eslint-disable */
import axios from 'axios';
// const axios = require('axios');
import { showAlert } from './alerts';
// const { showAlert } = require('./alerts');

//  axios.defaults.withCredentials = true;
//  localhost !== 127.0.0.1

const baseUrl = 'http://localhost:3000';
const api = '/api/v1';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      // url: 'http://127.0.0.1:3000/api/v1/users/login',
      url: `${baseUrl}${api}/users/login`,
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      // url: 'http://127.0.0.1:3000/api/v1/users/logout'
      url: `${baseUrl}${api}/users/logout`
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};