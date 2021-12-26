import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {},
  content: {
    paddingHorizontal: theme.spacing.medium,
    paddingBottom: theme.spacing.medium,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: theme.colors.white,
  },
  header: {
    paddingVertical: theme.spacing.small,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 19,
    color: theme.colors.text,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
  },
  inputs: {
    paddingVertical: theme.spacing.medium,
  },
});

export default styles;
