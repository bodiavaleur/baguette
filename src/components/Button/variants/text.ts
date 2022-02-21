import {StyleSheet} from 'react-native';
import regular from './regular';
import {theme} from '~config/theme';

const text = StyleSheet.create({
  title: {
    ...regular.title,
    fontWeight: '700',
    color: theme.colors.primary,
  },
});

export default text;
