import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: theme.spacing.medium,
  },
  word: {
    ...typography.title,
    fontSize: fontSize.h4,
    marginBottom: theme.spacing.medium,
  },
  translations: {
    flex: 1,
  },
  translation: {
    ...typography.text,
    fontSize: fontSize.h5,
  },
  example: {
    ...typography.description,
    marginVertical: theme.spacing.small,
    fontSize: fontSize.h6,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
