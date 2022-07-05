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
