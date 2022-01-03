import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: theme.spacing.medium,
    shadowColor: theme.colors.shadow,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: theme.spacing.small,
  },
  text: {
    flex: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default styles;
