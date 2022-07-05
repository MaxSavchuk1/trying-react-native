import axios from 'axios';
import CONSTANTS from '../constants';

const createApiInstance = (URL = CONSTANTS.BASE_URL) => {
  const instance = axios.create({
    baseURL: URL,
  });

  instance.interceptors.request.use(
    config => {
      return config;
    },
    err => Promise.reject(err)
  );

  instance.interceptors.response.use(
    response => {
      return response;
    },
    err => Promise.reject(err)
  );
  return instance;
};
export default createApiInstance;
