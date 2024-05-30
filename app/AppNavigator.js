import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../src/Screens/SignUp'; // Adjust the path
import Home from '../src/Screens/Home'; // Adjust the path
import Splash from '../src/Screens/Splash'; // Adjust the path
import Login from '../src/Screens/Login'; // Adjust the path
import MyAddress from '../src/Screens/MyAddress';
import AddAdress from '../src/Screens/AddAdress';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyAddress"
        component={MyAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddAdress"
        component={AddAdress}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
//AddAdress
export default AppNavigator;
