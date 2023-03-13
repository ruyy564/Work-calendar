import axios from 'axios';

import { store } from './store';
import { logout } from './services/user';
import { LOCAL_STORAGE_TOKEN } from './entities/User/constants';

const UNAUTH_ERROR = 401;
const API_URL = 'http://localhost:7000/api';

const $api = axios.create({
  baseURL: API_URL,
});

export const interceptor = ({ dispatch }: typeof store) => {
  $api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(
      LOCAL_STORAGE_TOKEN
    )}`;

    return config;
  });

  $api.interceptors.response.use(
    (config) => {
      return config;
    },
    (error) => {
      if (error.response.status === UNAUTH_ERROR) {
        dispatch(logout());
      }

      return Promise.reject(error);
    }
  );
};
export default $api;
