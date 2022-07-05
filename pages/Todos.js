import React from 'react';
import { SafeAreaView, View, FlatList, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import AddTodo from '../components/AddTodo';
import Navbar from '../components/Navbar';
import Todo from '../components/Todo';
import styles from '../styles';
import ZoomAnimation from '../components/ZoomAnimation';

export default function Todos () {
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const { deleteTodo, updateTodo, createTodo, deleteDoneTodos } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const renderItem = ({ item }) => (
    <ZoomAnimation>
      <Todo todo={item} onRemove={deleteTodo} onUpdate={updateTodo} />
    </ZoomAnimation>
  );
  const keyExtractor = item => item.id;
  const isSomeDone = todos.some(todo => todo.isDone === true);
  return (
    <SafeAreaView style={styles.todosMainContainer}>
      <Navbar title='Список дел' />
      <View style={styles.todosContainer}>
        <AddTodo onSubmit={createTodo} />
        <FlatList data={todos} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
      {isSomeDone && (
        <ZoomAnimation duration={150}>
          <View style={styles.stickyButton}>
            <Button
              title='Удалить завершенные'
              onPress={() => {
                deleteDoneTodos();
              }}
            />
          </View>
        </ZoomAnimation>
      )}
    </SafeAreaView>
  );
}
