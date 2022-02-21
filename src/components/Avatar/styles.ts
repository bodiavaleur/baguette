import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderRadius: 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.placeholderGray,
  },
  placeholderText: {
    ...typography.text,
    color: theme.colors.white,
  },
});

export default styles;
