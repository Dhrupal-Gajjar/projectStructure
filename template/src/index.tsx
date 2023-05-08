import * as React from 'react';
import { useColorScheme } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import App from './screens/login';

const darkTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "red",
    accent: "pink"
  },
};

const lightTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "green",
    accent: "blue",
  },
};

export default function Main() {
  const scheme = useColorScheme();
  return (
    <PaperProvider theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <App />
    </PaperProvider>
  );
}
