import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.large,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: theme.spacing.medium,
  },
});

export default styles;
