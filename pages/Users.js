import React, { useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

function Users () {
  const { users, error, isFetching } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const { getUsersAction } = bindActionCreators(actionCreators, dispatch);
  const getUsers = () => {
    getUsersAction();
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <SafeAreaView>
      <Text>Hi</Text>
    </SafeAreaView>
  );
}

export default Users;
