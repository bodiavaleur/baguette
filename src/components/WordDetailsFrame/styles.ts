import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

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
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: theme.colors.text,
  },
  translation: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 18,
    color: theme.colors.text,
  },
  example: {
    alignSelf: 'center',
    marginVertical: theme.spacing.medium,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: theme.colors.disabledGray,
  },
});

export default styles;
