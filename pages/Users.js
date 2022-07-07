import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';
import UserPreview from '../components/UserPreview';
import Error from '../components/Error';

function Users ({ navigation }) {
  const { users, error, isFetching } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const { getUsersAction } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (!users.length) {
      getUsersAction();
    }
  }, []);
  const [page, setPage] = useState(2); // !!!
  const fetchMore = () => {
    getUsersAction(page);
    setPage(prev => prev + 1);
  };
  const footerComponent = () => (isFetching ? <ActivityIndicator size='large' /> : <View></View>);
  const renderItem = ({ item }) => <UserPreview user={item} navigation={navigation} />;
  const keyExtractor = item => item.login.uuid + Date.now();
  return (
    <SafeAreaView>
      {!!users.length && (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={{ width: '100%' }}
          onEndReachedThreshold={0.3}
          onEndReached={() => {
            fetchMore();
          }}
          ListFooterComponent={footerComponent}
        />
      )}
      {isFetching && <ActivityIndicator size='large' />}
      {error && (
        <Error error={error} reload={getUsersAction} text='При загрузке данных произошла ошибка' />
      )}
    </SafeAreaView>
  );
}

export default Users;
