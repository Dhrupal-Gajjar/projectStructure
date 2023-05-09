import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Title, } from 'react-native-paper';
import { ThemeContext } from 'theme';

class LoginScreen extends React.Component {
    
    render () {
            
        return (
            <ThemeContext.Consumer>
                {({theme}) =>
                {
                   return(
                        <View style={styles.container}>
                                <Title style={{color:theme.colors.text}}>Welcome to React Native Home Screen!</Title>
                                <Button mode="contained" icon="account" color="blue" 
                                onPress={()=>{}}>
                                    Go to Profile Screen cvdfd
                                </Button>
                         </View>
                    )}
                }
            </ThemeContext.Consumer>
        
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
});

export default LoginScreen;