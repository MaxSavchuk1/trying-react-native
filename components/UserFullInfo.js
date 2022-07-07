import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

function UserFullInfo ({ route }) {
  // console.log(route.params);
  const {
    picture: { large },
    name: { first: firstName, last: lastName },
    dob: { age },
    location: { country, state, city },
    login: { username },
    email,
    phone,
  } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <View style={styles.photoBack}>
        <Image source={{ uri: large }} style={styles.image} />
      </View>

      <Text style={styles.fullName}>
        {firstName} {lastName}, {age}
      </Text>
      <Text style={styles.location}>
        {country}, {state} state, {city}
      </Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 15,
    padding: 20,
    margin: 20,
    backgroundColor: 'lightgrey',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150,
  },
  username: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  photoBack: {
    backgroundColor: 'white',
    width: 154,
    height: 154,
    borderRadius: 154,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  },
  fullName: {
    fontSize: 20,
    fontWeight: '300',
  },
  location: {
    marginBottom: 40,
    marginTop: 8,
  },
  email: {
    textAlign: 'right',
  },
  phone: {
    textAlign: 'right',
  },
});

export default UserFullInfo;
