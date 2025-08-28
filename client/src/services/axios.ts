import axios from 'axios';
import {authService} from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// if refresh token is expired, get new access token
// check the error in the response and send request to refresh endpoint
// if refresh token is expired, redirect to login page
api.interceptors.response.use(
  // for every successful response from api
  res => res,

  // for every error from api
  async error => {
    console.log('API Error:', {
      status: error.response?.status,
      message: error.response?.data?.message,
      url: error.config?.url,
    });

    // get the sent api request
    const originalRequest = error.config;

    // if the error is because the access token is expired
    if (
      originalRequest &&
      !originalRequest.retry &&
      error.response?.status === 401 &&
      error.response?.data?.message === 'Unauthorized' &&
      originalRequest.url !== '/auth/refresh' &&
      originalRequest.url !== '/auth/logout' &&
      originalRequest.url !== '/auth/login' &&
      originalRequest.url !== '/auth/register'
    ) {
      console.log(originalRequest.url);
      // to try the request again, set retry variable to true
      originalRequest.retry = true;

      try {
        // with refresh token, get new access token
        await api.post('/auth/refresh');

        // send the request again with new access token
        return api.request(originalRequest);
      } catch (error) {
        // if refresh token is expired, redirect to login page
        await authService.logout();
        window.location.href = '/login';

        // return error
        return Promise.reject(error);
      }
    }

    // return error
    return Promise.reject(error);
  },
);

export default api;
