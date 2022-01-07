import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 256,
    height: 360,
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
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 12,
    borderRadius: 16,
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

  title: {
    ...typography.text,
    fontSize: fontSize.h2,
    fontWeight: '600',
    color: theme.colors.text,
  },
});

export default styles;
