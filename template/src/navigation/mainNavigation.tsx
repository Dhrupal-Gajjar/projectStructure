import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'screens/login'

const Stack = createNativeStackNavigator();

const mainNavigation = () => {
  return (
    <>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={LoginScreen} 
            options={{headerShown:true}} 
          />
       </Stack.Navigator>
    </>
  );
};



export default mainNavigation;