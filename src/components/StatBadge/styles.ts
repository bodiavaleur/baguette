import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.small,
    borderRadius: 8,
    backgroundColor: theme.colors.action,
  },
  label: {
    ...typography.text,
    fontWeight: '500',
    fontSize: fontSize.h5,
    marginRight: theme.spacing.small,
  },
  count: {
    ...typography.text,
    fontSize: fontSize.h5,
    fontWeight: '700',
  },
});

export default styles;
