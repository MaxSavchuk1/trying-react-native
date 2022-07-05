import ACTION_TYPES from '../actions/actionTypes';
import { find, filter } from 'lodash';

const initialState = {
  todos: [],
};

function todosReducer (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_TODO: {
      const { value } = action;
      const { todos } = state;
      const newTodo = {
        id: Date.now(),
        isDone: false,
        title: value,
      };
      const newTodos = [newTodo, ...todos];
      return { todos: newTodos };
    }
    case ACTION_TYPES.DELETE_TODO: {
      const { id } = action;
      const { todos } = state;
      const newTodos = [...todos];
      newTodos.splice(
        newTodos.findIndex(todo => id === todo.id),
        1
      );
      return { todos: newTodos };
    }
    case ACTION_TYPES.UPDATE_TODO: {
      const {
        payload: { isDone, id },
      } = action;
      const { todos } = state;
      const updatedTodo = { ...find(todos, todo => id === todo.id), isDone };
      const newTodos = [...todos];
      newTodos[newTodos.findIndex(todo => todo.id === id)] = updatedTodo;
      return { todos: newTodos };
    }
    case ACTION_TYPES.DELETE_DONE_TODOS: {
      const { todos } = state;
      const newTodos = filter(todos, todo => todo.isDone !== true);
      return { todos: newTodos };
    }
    default:
      return state;
  }
}

export default todosReducer;
