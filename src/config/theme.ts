import {DefaultTheme} from '@react-navigation/native';

export const DEFAULT_SPACING = 4;

export const makeSpacing = (multiplier: number) => DEFAULT_SPACING * multiplier;

export const theme = {
  colors: {
    primary: '#F67801',

    pureBlack: '#000000',
    text: '#333333',

    white: '#FFFFFF',
    shadow: '#000000',

    action: 'rgba(200,200,200,0.25)',
    primaryGray: '#ccc',
    placeholderGray: '#b8b5b5',
    disabledGray: '#a7a7a7',
    divider: 'rgba(217,217,217,0.65)',

    dangerRed: '#ff2931',
    warning: '#ff792b',
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
