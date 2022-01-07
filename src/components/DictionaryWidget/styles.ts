import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

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
    ...typography.title,
    fontSize: fontSize.h5,
    marginBottom: theme.spacing.xs,
  },
  largeName: {
    ...typography.title,
    fontSize: fontSize.h3,
    marginBottom: theme.spacing.xs,
  },
  description: {
    ...typography.text,
    fontSize: fontSize.h6,
    color: theme.colors.disabledGray,
  },
});

export default styles;
