
// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../scr/views/login';
import HomeScreen from '../scr/views/home';
import DesenvolvedoresScreen from '../scr/views/desenvolvedores';
import PerfilScreen from '../scr/views/perfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Componente Tabs
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="perfil" component={PerfilScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen'>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='DesenvolvedoresScreen' component={DesenvolvedoresScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Perfil' component={PerfilScreen} options={{ headerShown: false }} />
      <Stack.Screen name="homeStack" component={Tabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MyStack;
