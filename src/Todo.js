import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './../styles';

export default function Todo ({ todo, onRemove }) {
  const longPressHandler = id => {
    Alert.alert(
      'Удалить дело?',
      'Дело удалится безвозвратно',
      [
        {
          text: 'Отмена',
          onPress: () => {},
        },
        {
          text: 'Подтвердить',
          onPress: () => onRemove(id),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      }
    );
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {}}
      onLongPress={() => longPressHandler(todo.id)}
    >
      <View style={styles.todoItem}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
