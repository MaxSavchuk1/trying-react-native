import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

function Error ({ error, reload, text }) {
  const [isShowErrorDetails, setisShowErrorDetails] = useState(false);
  const showErrorDetails = () => {
    setisShowErrorDetails(prevState => !prevState);
  };
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <Text style={{ fontSize: 19, marginBottom: 30, marginHorizontal: 20, textAlign: 'center' }}>
        {text}
      </Text>
      <Button title='Попробовать еще' onPress={reload} />
      <View style={{ marginTop: 30 }}>
        <Button
          title={isShowErrorDetails ? 'Скрыть подробности' : 'Показать подробности'}
          onPress={showErrorDetails}
        />
        {isShowErrorDetails && (
          <View style={{ marginTop: 30 }}>
            <Text>{error.code}</Text>
            <Text>{error.message}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default Error;
