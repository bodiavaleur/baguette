import {StyleSheet} from 'react-native';
import {BOTTOM_BAR_HEIGHT} from '~config/device';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  withFlex: {
    flex: 1,
  },
  contentContainer: {
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
