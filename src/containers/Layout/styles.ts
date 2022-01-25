import {StyleSheet} from 'react-native';
import {BOTTOM_BAR_HEIGHT} from '~config/device';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.colors.white,
  },
  withFlex: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  noPadding: {
    paddingHorizontal: 0,
  },
  ignoreBottomBar: {
    paddingBottom: 0,
  },
  safeBottomBar: {
    paddingBottom: BOTTOM_BAR_HEIGHT,
  },
});

export default styles;
