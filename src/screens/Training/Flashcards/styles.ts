import {StyleSheet} from 'react-native';
import {BOTTOM_BAR_HEIGHT} from '~config/device';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: BOTTOM_BAR_HEIGHT,
  },
});

export default styles;
