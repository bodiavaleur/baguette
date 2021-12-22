import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-ui-lib';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    width: 64,
    height: 64,
    padding: theme.spacing.medium,

    top: -16,

    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.64,
    shadowRadius: 12,
    elevation: 12,

    borderRadius: 100,
    backgroundColor: theme.colors.primary,
  },
});

export default styles;
