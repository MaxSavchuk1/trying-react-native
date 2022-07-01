import React, { useState } from 'react';
import { SafeAreaView, View, FlatList, StatusBar } from 'react-native';
import AddTodo from './src/AddTodo';
import Navbar from './src/Navbar';
import Todo from './src/Todo';
import styles from './styles';
import Animation from './src/Animation';

export default function App () {
  const [todos, setTodos] = useState([]);
  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };
  const removeTodo = id => {
    setTodos(prev => prev.filter(el => el.id !== id));
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Navbar title='Todo App' />
      <View style={styles.todosContainer}>
        <AddTodo onSubmit={addTodo} />
        {todos.length ? (
          <FlatList
            data={todos}
            renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
            keyExtractor={item => item.id}
          />
        ) : (
          <Animation />
        )}
      </View>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
}
