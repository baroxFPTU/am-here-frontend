import { axiosClient } from 'app/axiosClient';

export const roleApi = {
  findAll: async () => {
    return await axiosClient.get('/roles');
  },
};
