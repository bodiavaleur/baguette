import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const regular = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.regular,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
    color: theme.colors.white,
  },
  disabled: {
    backgroundColor: theme.colors.disabledGray,
  },
});

export default regular;
