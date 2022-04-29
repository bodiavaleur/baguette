import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: theme.spacing.medium,
    zIndex: -1,
  },
  language: {
    alignItems: 'center',
    padding: theme.spacing.small,
    borderRadius: 12,
  },
  selected: {
    borderWidth: 4,
    borderColor: theme.colors.primary,
  },
  languageImage: {
    width: 64,
    height: 64,
  },
  languageText: {
    ...typography.title,
    fontSize: fontSize.h4,
  },
});

export default styles;
