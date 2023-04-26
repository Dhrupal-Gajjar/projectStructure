import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Title } from 'react-native-paper';
const ProfileScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Title>Welcome to the Profile Screen!</Title>
      <Button mode="contained" icon="home" color="blue" 
        onPress={()=>navigation.navigate("Home")}>
          Go to Home Screen
      </Button>
    </View>
  )
}

const HomeScreen = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Title>Welcome to React Native Home Screen!</Title>
      <Button mode="contained" icon="account" color="blue" 
        onPress={()=>navigation.navigate("Profile")}>
          Go to Profile Screen
      </Button>
    </View>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} 
            options={{headerShown:false}} 
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});

export default App;