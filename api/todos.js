import createApiInstance from './index';

const api = createApiInstance('http://46.46.93.152:5000/api');

export const getTodos = (page = 0) => api.get(`/tasks/?offset=${page}`);

export const createTodo = task => api.post('/tasks', task);

export const deleteTodo = id => api.delete(`/tasks/${id}`);

export const updateTodo = (id, isDone) => api.patch(`/tasks/${id}`, { isDone });
