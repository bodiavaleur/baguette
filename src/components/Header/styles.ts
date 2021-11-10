import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 57,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  leftPlugins: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightPlugins: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
