import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  blur: {
    borderRadius: 16,
  },
  details: {
    width: '100%',
    padding: theme.spacing.medium,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: theme.spacing.medium,
  },
  soundIcon: {
    marginRight: theme.spacing.regular,
  },
  heading: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  word: {
    ...typography.title,
    fontSize: fontSize.h2,
  },
  translation: {
    ...typography.text,
  },
  example: {
    ...typography.description,
    alignSelf: 'center',
    marginVertical: theme.spacing.medium,
    fontWeight: '500',
  },
});

export default styles;
