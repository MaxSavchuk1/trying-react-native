import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AddTodo from './src/AddTodo';
import Navbar from './src/Navbar';
import Todo from './src/Todo';

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
  return (
    <View>
      <Navbar title='Todo App' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <View>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
