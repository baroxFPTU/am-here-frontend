import { axiosClient } from 'app/axiosClient';

export const userApi = {
  getById: async (uid) => {
    return await axiosClient.get(`/users/${uid}`);
  },
};
