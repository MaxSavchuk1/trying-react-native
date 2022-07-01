import React from 'react';
import { Text, View } from 'react-native';
import styles from './../styles';

export default function Navbar ({ title }) {
  return (
    <View style={styles.navbarContainer}>
      <Text style={styles.navbarText}>{title}</Text>
    </View>
  );
}
