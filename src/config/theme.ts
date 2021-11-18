import {DefaultTheme} from '@react-navigation/native';

export const DEFAULT_SPACING = 4;

export const makeSpacing = (multiplier: number) => DEFAULT_SPACING * multiplier;

export const theme = {
  colors: {
    primary: '#F67801',

    text: '#333333',

    white: '#FFFFFF',
    shadow: '#000000',

    primaryGray: '#ccc',
    disabledGray: '#a7a7a7',
  },
  spacing: {
    none: 0,
    xs: makeSpacing(1),
    small: makeSpacing(2),
    medium: makeSpacing(4),
    large: makeSpacing(8),
  },
};

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.white,
  },
};
