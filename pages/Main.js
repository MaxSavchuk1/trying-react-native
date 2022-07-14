import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './../styles';

export default function Main () {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Главная страница</Text>
    </SafeAreaView>
  );
}
