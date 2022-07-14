import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

export default function CustomDrawer (props) {
  const openTodos = () => {
    props.navigation.navigate('Todos');
  };
  const openUsers = () => {
    props.navigation.navigate('Users');
  };
  const openMain = () => {
    props.navigation.navigate('Main');
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
