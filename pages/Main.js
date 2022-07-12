import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from './../styles';

export default function Main ({ navigation }) {
  const openTodos = () => {
    navigation.navigate('Todos');
  };
  const openUsers = () => {
    navigation.navigate('Users');
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.mainContainerNavigationItem}
        onPress={openTodos}
      >
        <Text style={styles.mainContainerNavigationItemText}>Мои дела</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.mainContainerNavigationItem}
        onPress={openUsers}
      >
        <Text style={styles.mainContainerNavigationItemText}>Список пользователей</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
