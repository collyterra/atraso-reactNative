import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../scr/views/login';
import HomeTeste from '../scr/views/hometeste';

 
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName='HomeTeste'>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='HomeTeste' component={HomeTeste} />
    </Stack.Navigator>
  );
}

export default MyStack;
