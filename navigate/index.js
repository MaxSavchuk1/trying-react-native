import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../pages/Main';
import Todos from '../pages/Todos';

const Stack = createStackNavigator();

export default function Navigate () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} options={{ title: 'Главная' }} />
        <Stack.Screen name='Todos' component={Todos} options={{ title: 'Дела' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
