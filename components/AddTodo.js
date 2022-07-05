import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import styles from './../styles';

export default function AddTodo ({ onSubmit }) {
  const [value, setValue] = useState('');
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('Название дела не может быть пустым');
    }
  };
  return (
    <View style={styles.addTodoContainer}>
      <TextInput
        style={styles.addTodoInput}
        value={value}
        onChangeText={text => setValue(text)}
        placeholder='Название'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Button title='Добавить' onPress={pressHandler} />
    </View>
  );
}
