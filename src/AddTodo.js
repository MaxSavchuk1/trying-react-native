import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

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
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={text => setValue(text)}
        placeholder='Название'
        autoCorrect={false}
        autoCapitalize='none'
      />
      <Button title='Добавить' style={styles.button} onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'blue',
    height: 36,
    paddingLeft: 10,
  },
  button: {},
});
