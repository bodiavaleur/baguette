import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'flex-start',
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
    flex: 1,
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
