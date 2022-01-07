import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const regular = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.regular,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
  },
  title: {
    ...typography.text,
    fontSize: fontSize.h4,
    fontWeight: '600',
    color: theme.colors.white,
  },
  disabled: {
    backgroundColor: theme.colors.disabledGray,
  },
  blur: {
    borderRadius: 16,
  },
});

export default regular;
