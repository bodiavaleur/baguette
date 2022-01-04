import React from 'react';
import {StyleProp, TextInputProps, TextStyle} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native';

interface InputProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
}

const Input: React.FC<InputProps> = ({style, ...props}) => {
  return (
    <TextInput
      style={[styles.container, style]}
      returnKeyType="done"
      {...props}
    />
  );
};

export default Input;
