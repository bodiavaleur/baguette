import {StyleSheet} from 'react-native';
import regular from './regular';
import {theme} from '~config/theme';

const action = StyleSheet.create({
  ...regular,
  container: {
    ...regular.container,
    backgroundColor: theme.colors.action,
  },
  title: {
    ...regular.title,
    fontWeight: '700',
    color: theme.colors.text,
  },
});

export default action;
