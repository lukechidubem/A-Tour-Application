/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const baseUrl = 'http://localhost:3000';
const api = '/api/v1';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? '/api/v1/users/updateMyPassword'
        : // `${baseUrl}${api}/users/updateMyPassword`
          '/api/v1/users/updateMe';
    // `${baseUrl}${api}/users/updateMe`;

    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
