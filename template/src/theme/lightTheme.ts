import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


export const lightTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "green",
      accent: "blue",
      text:'pink',
      primaryContainer:'grey'
    },
  };