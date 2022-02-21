import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {BOTTOM_BAR_HEIGHT} from '~config/device';

const styles = StyleSheet.create({
  container: {
    height: BOTTOM_BAR_HEIGHT,
    elevation: 0,
  },
  label: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '500',
  },
  tab: {
    marginTop: theme.spacing.small,
    height: 48,
    marginBottom: theme.spacing.xs,
  },
  tabIcon: {
    width: 28,
    height: 28,
  },
});

export default styles;
