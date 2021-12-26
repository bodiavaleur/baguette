import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  blur: {
    borderRadius: 8,
  },
  iconContainer: {
    padding: theme.spacing.small,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
