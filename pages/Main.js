import React from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';
import styles from './../styles';

export default function Main ({ navigation }) {
  const openTodos = () => {
    navigation.navigate('Todos');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Button title='открыть мои дела' onPress={openTodos} />
    </SafeAreaView>
  );
}
