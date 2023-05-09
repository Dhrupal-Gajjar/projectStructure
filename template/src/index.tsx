import * as React from 'react';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import App from 'navigation/mainNavigation';
import { darkTheme, lightTheme,ThemeContext } from 'theme';
export default function Main() {
    const scheme = useColorScheme();
    const state = React.useContext(ThemeContext)
    return (
           <ThemeContext.Provider value={{theme:scheme === 'dark' ? darkTheme : lightTheme}}  >
                <NavigationContainer>
                <App />
                </NavigationContainer>
    
           </ThemeContext.Provider>
    );
}
