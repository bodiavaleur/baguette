import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  word: {
    marginBottom: theme.spacing.large,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: theme.colors.text,
  },
  translation: {
    marginBottom: theme.spacing.large,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: theme.colors.text,
  },
  example: {
    marginBottom: theme.spacing.large,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 20,
    color: theme.colors.disabledGray,
  },
});

export default styles;
