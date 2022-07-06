import createApiInstance from './index';

const api = createApiInstance('https://randomuser.me/api/');

export const getUsers = (page = 1, results = 3) =>
  api.get(`?page=${page}&results=${results}&seed=abc`);
