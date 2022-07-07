import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from '../pages/Main';
import Todos from '../pages/Todos';
import CONSTANTS from '../constants';
import Users from '../pages/Users';
import UserFullInfo from '../components/UserFullInfo';

const Stack = createStackNavigator();

export default function Navigate () {
  const headerOptions = title => ({
    title,
    headerStyle: { backgroundColor: CONSTANTS.MAIN_COLOR, height: 100 },
    headerTitleAlign: 'center',
    headerTitleStyle: {
      color: 'lightgrey',
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} options={headerOptions('Главная')} />
        <Stack.Screen name='Todos' component={Todos} options={headerOptions('Дела')} />
        <Stack.Screen name='Users' component={Users} options={headerOptions('Пользователи')} />
        <Stack.Screen
          name='UserFullInfo'
          component={UserFullInfo}
          options={headerOptions('Полная информация')}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
