import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MainStack from './navigate';

export default function App () {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
}
