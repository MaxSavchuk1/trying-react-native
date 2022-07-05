import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import * as Progress from 'react-native-progress';
import { Provider } from 'react-redux';
import store from './store';
import MainStack from './navigate';
import styles from './styles';
import { delay } from './helpers';

export default function App () {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    delay(2500).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <Provider store={store}>
      {isLoading ? (
        <SafeAreaView style={styles.loader}>
          <Progress.CircleSnail />
        </SafeAreaView>
      ) : (
        <MainStack />
      )}
    </Provider>
  );
}
