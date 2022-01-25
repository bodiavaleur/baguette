import {StyleSheet} from 'react-native';
import {fontSize, typography} from '~config/typography';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
  },
  avatar: {
    alignSelf: 'center',
  },
  title: {
    ...typography.text,
    fontSize: fontSize.h2,
    fontWeight: '600',
    color: theme.colors.text,
    textAlign: 'center',
  },
  sound: {
    alignSelf: 'center',
    padding: theme.spacing.small,
    borderRadius: 100,
    backgroundColor: theme.colors.primary,
  },
});

export default styles;
