import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from '../pages/Main';
import Todos from '../pages/Todos';
import Users from '../pages/Users';
import UserFullInfo from '../components/UserFullInfo';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function Navigate () {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen name='Main' component={Main} options={{ title: 'Главная' }} />
        <Drawer.Screen name='Todos' component={Todos} options={{ title: 'Дела' }} />
        <Drawer.Screen name='Users' component={Users} options={{ title: 'Пользователи' }} />
        <Drawer.Screen
          name='UserFullInfo'
          component={UserFullInfo}
          options={{
            drawerItemStyle: {
              display: 'none',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
