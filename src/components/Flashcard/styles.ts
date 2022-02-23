import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    position: 'absolute',
    width: 256,
    height: 400,
    top: -400 / 2,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: theme.spacing.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 12,
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'rgba(50,50,50,0.1)',
    backgroundColor: theme.colors.white,
  },
  snap: {
    height: '100%',
    width: 40,
    position: 'absolute',
    zIndex: 2,
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
  label: {
    position: 'absolute',
    zIndex: 2,
  },
});

export default styles;
