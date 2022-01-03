import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 148,
    height: 148,
    margin: theme.spacing.small,
  },
  fullWidth: {
    maxWidth: undefined,
  },
  blur: {
    borderRadius: 28,
  },
  content: {
    flex: 1,
    padding: theme.spacing.medium,
  },
  image: {
    marginBottom: theme.spacing.small,
  },
  name: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 24,
    color: theme.colors.text,
  },
  largeName: {
    fontSize: 20,
    lineHeight: 24,
  },
  description: {
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 13,
    color: theme.colors.disabledGray,
  },
});

export default styles;
