import React from 'react';
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
      <View style={styles.todosContainer}>
        <AddTodo onSubmit={createTodo} />
        <FlatList data={todos} renderItem={renderItem} keyExtractor={keyExtractor} />
      </View>
      {isSomeDone && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.stickyButton}
          onPress={() => {
            deleteDoneTodos();
          }}
        >
          <ZoomAnimation duration={150}>
            <MaterialCommunityIcons name='delete-circle-outline' size={55} color='black' />
          </ZoomAnimation>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
