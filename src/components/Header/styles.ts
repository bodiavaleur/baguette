import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.medium,
  },
  leftPlugins: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middlePlugins: {
    flex: 5,
    alignItems: 'center',
  },
  rightPlugins: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
