import ACTION_TYPES from './actionTypes';

export const createTodo = value => {
  return {
    type: ACTION_TYPES.CREATE_TODO,
    value,
  };
};

export const deleteTodo = id => {
  return {
    type: ACTION_TYPES.DELETE_TODO,
    id,
  };
};

export const updateTodo = payload => {
  return {
    type: ACTION_TYPES.UPDATE_TODO,
    payload,
  };
};

export const deleteDoneTodos = () => {
  return {
    type: ACTION_TYPES.DELETE_DONE_TODOS,
  };
};

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
