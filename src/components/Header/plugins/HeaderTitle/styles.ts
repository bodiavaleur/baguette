import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    ...typography.title,
    fontSize: fontSize.h4,
  },
});

export default styles;
