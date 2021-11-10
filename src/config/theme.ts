import {DefaultTheme} from '@react-navigation/native';

export const DEFAULT_SCALABLE = 4;

export const theme = {
  colors: {
    text: '#333333',
    white: '#FFFFFF',
  },
};

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.white,
  },
};
