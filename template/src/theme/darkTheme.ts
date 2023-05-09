import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


export const darkTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: "red",
      accent: "pink",
      text:'orange',
      primaryContainer:'grey'
    },
  };