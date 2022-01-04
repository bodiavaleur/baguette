import {DefaultTheme} from '@react-navigation/native';

export const DEFAULT_SPACING = 4;
export const ROOT_FONT_SIZE = 16;

export const makeSpacing = (multiplier: number) => DEFAULT_SPACING * multiplier;
export const makeFontSize = (multiplier = 1) => ROOT_FONT_SIZE * multiplier;

export const theme = {
  colors: {
    primary: '#F67801',

    text: '#333333',

    white: '#FFFFFF',
    shadow: '#000000',

    primaryGray: '#ccc',
    disabledGray: '#a7a7a7',
    divider: 'rgba(217,217,217,0.65)',

    dangerRed: '#ff2931',
  },
  spacing: {
    none: 0,
    xs: makeSpacing(1),
    small: makeSpacing(2),
    regular: makeSpacing(3),
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
