import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  inputRow: {
    marginVertical: theme.spacing.small,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: theme.spacing.small,
  },
  button: {
    marginBottom: theme.spacing.small,
  },
});

export default styles;
