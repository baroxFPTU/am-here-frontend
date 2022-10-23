import axios from 'axios';

export const baseURL = process.env.REACT_APP_API_URL || 'http://10.1.106.147:3000';

/**
 * Axios Config used for almost request
 */
const axiosClient = axios.create({
  baseURL: `${baseURL}/api`,
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosClient };
