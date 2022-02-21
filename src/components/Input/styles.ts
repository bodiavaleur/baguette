import {StyleSheet} from 'react-native';
import {typography} from '~config/typography';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    ...typography.title,
    height: 40,
    color: theme.colors.text,
  },
});

export default styles;
