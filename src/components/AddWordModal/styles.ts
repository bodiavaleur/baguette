import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: theme.spacing.medium,
    paddingBottom: theme.spacing.medium,
    borderRadius: 16,
    backgroundColor: theme.colors.white,
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  pickerPanel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    paddingVertical: theme.spacing.medium,
  },
  pickers: {
    flex: 1,
    marginLeft: theme.spacing.medium,
  },
});

export default styles;
