import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {},
  avatar: {
    alignSelf: 'center',
  },
  details: {
    marginVertical: theme.spacing.medium,
    alignItems: 'center',
  },
  name: {
    ...typography.title,
    marginBottom: theme.spacing.small,
  },
  description: {
    ...typography.description,
    fontSize: fontSize.h5,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  buttonLeft: {
    marginRight: theme.spacing.medium,
  },
});

export default styles;
