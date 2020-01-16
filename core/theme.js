import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    surface: '#f1c40f'
  },
  sizes: {
    medium: 12,
    large: 16
  },
  highlightedText: {
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  button: {
    cursor: 'pointer'
  }
};
