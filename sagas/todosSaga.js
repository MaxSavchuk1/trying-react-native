import { put } from 'redux-saga/effects';
import * as API from '../api/todos';
import * as ACT from '../actions/actionCreators';

export function * getTodosSaga ({ page }) {
  yield put(ACT.getTodosRequest());
  try {
    const {
      data: { data: tasks, metadata: tasksAmount },
    } = yield API.getTodos(page);
    yield put(ACT.getTodosSuccess(tasks, tasksAmount));
  } catch (error) {
    yield put(ACT.getTodosError(error));
  }
}

export function * createTodoSaga ({ todo }) {
  yield put(ACT.createTodoRequest());
  try {
    const {
      data: { data: task },
    } = yield API.createTodo(todo);
    yield put(ACT.createTodoSuccess(task));
  } catch (error) {
    yield put(ACT.createTodoError(error));
  }
}

export function * deleteTodoSaga ({ id }) {
  yield put(ACT.deleteTodoRequest());
  try {
    yield API.deleteTodo(id);
    yield put(ACT.deleteTodoSuccess(id));
  } catch (error) {
    yield put(ACT.deleteTodoError(error));
  }
}

export function * updateTodoSaga ({ id, isDone }) {
  yield put(ACT.updateTodoRequest());
  try {
    const {
      data: { data: task },
    } = yield API.updateTodo(id, isDone);
    yield put(ACT.updateTodoSuccess(task));
  } catch (error) {
    yield put(ACT.updateTodoError(error));
  }
}
