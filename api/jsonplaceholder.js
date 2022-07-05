import createApiInstance from './index';

const api = createApiInstance('https://jsonplaceholder.typicode.com');

export const getPosts = () => api.get('/posts');
export const getPost = id => api.get(`/posts/${id}`);
