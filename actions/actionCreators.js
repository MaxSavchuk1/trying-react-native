import ACTION_TYPES from './actionTypes';

export const getTodosAction = page => ({
  type: ACTION_TYPES.GET_TODOS_ACTION,
  page,
});

export const getTodosRequest = () => ({
  type: ACTION_TYPES.GET_TODOS_REQUEST,
});

export const getTodosSuccess = (tasks, tasksAmount) => ({
  type: ACTION_TYPES.GET_TODOS_SUCCESS,
  tasks,
  tasksAmount,
});

export const getTodosError = error => ({
  type: ACTION_TYPES.GET_TODOS_ERROR,
  error,
});

export const createTodoAction = todo => ({
  type: ACTION_TYPES.CREATE_TODO_ACTION,
  todo,
});

export const createTodoRequest = () => ({
  type: ACTION_TYPES.CREATE_TODO_REQUEST,
});

export const createTodoSuccess = task => ({
  type: ACTION_TYPES.CREATE_TODO_SUCCESS,
  task,
});

export const createTodoError = error => ({
  type: ACTION_TYPES.CREATE_TODO_ERROR,
  error,
});

export const deleteTodoAction = id => ({
  type: ACTION_TYPES.DELETE_TODO_ACTION,
  id,
});

export const deleteTodoRequest = () => ({
  type: ACTION_TYPES.DELETE_TODO_REQUEST,
});

export const deleteTodoSuccess = id => ({
  type: ACTION_TYPES.DELETE_TODO_SUCCESS,
  id,
});

export const deleteTodoError = error => ({
  type: ACTION_TYPES.DELETE_TODO_ERROR,
  error,
});

export const updateTodoAction = (id, isDone) => ({
  type: ACTION_TYPES.UPDATE_TODO_ACTION,
  id,
  isDone,
});

export const updateTodoRequest = () => ({
  type: ACTION_TYPES.UPDATE_TODO_REQUEST,
});

export const updateTodoSuccess = task => ({
  type: ACTION_TYPES.UPDATE_TODO_SUCCESS,
  task,
});

export const updateTodoError = error => ({
  type: ACTION_TYPES.UPDATE_TODO_ERROR,
  error,
});

/*******************************************************/
export const getUsersAction = page => ({
  type: ACTION_TYPES.GET_USERS_ACTION,
  page,
});

export const getUsersRequest = () => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccess = payload => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload,
});

export const getUsersError = error => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  error,
});
