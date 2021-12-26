import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  content: {
    paddingHorizontal: theme.spacing.medium,
    paddingBottom: theme.spacing.medium,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: theme.colors.white,
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  inputs: {
    paddingVertical: theme.spacing.medium,
  },
});

export default styles;
