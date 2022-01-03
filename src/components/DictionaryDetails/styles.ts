import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

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
    marginBottom: theme.spacing.small,
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
    color: theme.colors.text,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: theme.colors.disabledGray,
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
