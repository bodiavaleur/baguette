import React from 'react';
import {StyleProp, TextInputProps, TextStyle} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native';
import {theme} from '~config/theme';
import {Spacing} from '~types/theme';
import {INPUT_DEFAULT_LENGTH} from '~config/inputs';

interface InputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  margin: Spacing;
}

const Input: React.FC<InputProps> = ({style, margin = 'medium', ...props}) => {
  const marginVertical = {marginBottom: theme.spacing[margin]};

  return (
    <TextInput
      maxLength={INPUT_DEFAULT_LENGTH}
      style={[styles.container, marginVertical, style]}
      placeholderTextColor={theme.colors.placeholderGray}
      returnKeyType="done"
      {...props}
    />
  );
};

export default Input;
