import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {},
  toggleAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.medium,
  },
  toggleAuthText: {
    fontSize: 16,
    marginRight: theme.spacing.xs,
  },
});

export default styles;
