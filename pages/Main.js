import React from 'react';
import { SafeAreaView, Button, View } from 'react-native';
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
      <View style={{ margin: 10 }}>
        <Button title='открыть мои дела' onPress={openTodos} />
      </View>
      <View style={{ margin: 10 }}>
        <Button title='список пользователей' onPress={openUsers} />
      </View>
    </SafeAreaView>
  );
}
