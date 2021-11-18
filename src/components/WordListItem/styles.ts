import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    height: 80,
    marginBottom: theme.spacing.large,
    paddingHorizontal: theme.spacing.medium,
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    borderRadius: 24,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    flex: 1,
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
