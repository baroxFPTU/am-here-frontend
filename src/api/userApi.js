import { axiosClient } from 'app/axiosClient';

export const userApi = {
  getById: async (uid) => {
    return await axiosClient.get(`/users/${uid}`);
  },
  updateById: async (uid, data) => {
    return await axiosClient.put(`/users/${uid}`, data);
  },
};
