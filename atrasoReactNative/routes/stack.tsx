import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../scr/views/login';
import HomeScreen from '../scr/views/home';
import DesenvolvedoresScreen from '../scr/views/desenvolvedores';

 
const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='DesenvolvedoresScreen' component={DesenvolvedoresScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MyStack;
