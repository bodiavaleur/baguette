import {StyleSheet} from 'react-native';
import regular from './regular';
import {theme} from '~config/theme';

const action = StyleSheet.create({
  ...regular,
  container: {
    ...regular.container,
    backgroundColor: 'none',
  },
  title: {
    ...regular.title,
    color: theme.colors.text,
  },
});

export default action;
