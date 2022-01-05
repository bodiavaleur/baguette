import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.large,
  },
  content: {
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  avatar: {
    marginBottom: theme.spacing.medium,
    alignSelf: 'center',
  },
});

export default styles;
