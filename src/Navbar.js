import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbar ({ title }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: 'blue',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
