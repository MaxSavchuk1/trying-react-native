import React, { useEffect } from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';
import UserPreview from '../components/UserPreview';

function Users ({ navigation }) {
  const { users, error, isFetching } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const { getUsersAction } = bindActionCreators(actionCreators, dispatch);
  const getUsers = () => {
    getUsersAction();
  };
  useEffect(() => {
    getUsers();
  }, []);
  const renderItem = ({ item }) => <UserPreview user={item} navigation={navigation} />;
  const keyExtractor = item => item.id.value;
  return (
    <SafeAreaView style={{ paddingBottom: 20 }}>
      {!!users.length && (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={{ width: '100%' }}
        />
      )}
    </SafeAreaView>
  );
}

export default Users;
