import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from 'screens/login';
import Tabs from 'navigation/tabNavigation'
import Drawers from 'navigation/drawerNavigation'
const Stack = createNativeStackNavigator();

const mainNavigation = () => {
  return (
    <>
          <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={LoginScreen} 
            options={{headerShown:true}} 
          />
          <Stack.Screen name="Tabs" component={Tabs}  options={{headerShown:false}} />
          <Stack.Screen name="Drawers" component={Drawers}  options={{headerShown:false}} />
       </Stack.Navigator>
    </>
  );
};



export default mainNavigation;