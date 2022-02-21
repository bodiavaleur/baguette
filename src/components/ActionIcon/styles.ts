import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  iconContainer: {
    padding: theme.spacing.small,
    borderRadius: 8,
    backgroundColor: theme.colors.action,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
