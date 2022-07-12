import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as actionCreators from '../actions/actionCreators';
import AddTodo from '../components/AddTodo';
import Todo from '../components/Todo';
import styles from '../styles';
import ZoomAnimation from '../components/ZoomAnimation';

export default function Todos () {
  const { todos, error, isFetching, tasksAmount } = useSelector(state => state.todos);
  // console.log(error);
  const dispatch = useDispatch();
  const {
    updateTodoAction,
    getTodosAction,
    deleteTodoAction,
    createTodoAction,
  } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    getTodosAction();
  }, [todos.length]);

  const updateHandler = ({ id, isDone }) => {
    updateTodoAction(id, isDone);
  };

  const removeHandler = id => {
    deleteTodoAction(id);
  };

  const createHandler = todo => {
    createTodoAction({ taskBody: todo });
  };

  const renderItem = ({ item }) => (
    <ZoomAnimation>
      <Todo todo={item} onRemove={removeHandler} onUpdate={updateHandler} />
    </ZoomAnimation>
  );
  const keyExtractor = item => item.id;
  const isSomeDone = todos.some(todo => todo.isDone === true);
  const deleteDoneTodos = () => {
    todos.filter(todo => todo.isDone == true).forEach(todo => deleteTodoAction(todo.id));
  };

  return (
    <SafeAreaView style={styles.todosMainContainer}>
      <View style={styles.todosContainer}>
        <AddTodo onSubmit={createHandler} />
        <FlatList data={todos} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
      {isSomeDone && (
        <TouchableOpacity activeOpacity={0.7} style={styles.stickyButton} onPress={deleteDoneTodos}>
          <ZoomAnimation duration={150}>
            <MaterialCommunityIcons name='delete-circle-outline' size={55} color='black' />
          </ZoomAnimation>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
