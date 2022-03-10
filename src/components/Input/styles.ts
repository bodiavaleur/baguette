import {StyleSheet} from 'react-native';
import {typography} from '~config/typography';
import {theme} from '~config/theme';

const styles = StyleSheet.create({
  container: {
    ...typography.title,
    paddingVertical: theme.spacing.small,
    color: theme.colors.text,
  },
});

export default styles;
