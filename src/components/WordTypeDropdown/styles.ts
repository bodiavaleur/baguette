import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {fontSize, typography} from '~config/typography';

const inputStyle = {
  ...typography.title,
  alignSelf: 'flex-start',
  marginBottom: theme.spacing.small,
  paddingVertical: theme.spacing.small,
  paddingHorizontal: theme.spacing.medium,
  fontSize: fontSize.h4,
  borderColor: theme.colors.divider,
  backgroundColor: theme.colors.action,
  borderRadius: 8,
  color: theme.colors.text,
};

const styles = StyleSheet.create({
  placeholder: {
    ...typography.title,
    fontSize: fontSize.h4,
    color: theme.colors.placeholderGray,
  },
  inputIOS: {
    ...inputStyle,
  },
  inputAndroid: {
    ...inputStyle,
  },
});

export default styles;
