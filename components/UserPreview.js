import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import CONSTANTS from '../constants';

function UserPreview ({ user, navigation }) {
  const {
    picture: { medium },
    login: { username },
  } = user;
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('UserFullInfo', user)}
    >
      <View style={styles.photoBack}>
        <Image source={{ uri: medium }} style={styles.image} />
      </View>

      <Text style={styles.username}>{username}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 14,
    borderTopEndRadius: 1,
    backgroundColor: CONSTANTS.MAIN_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: '90%',
    minHeight: 75,
    overflow: 'hidden',
  },
  username: {
    marginHorizontal: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    color: 'white',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  photoBack: {
    backgroundColor: 'white',
    width: 54,
    height: 54,
    borderRadius: 54,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserPreview;
