import React from 'react';
import {TextInputProps} from 'react-native';
import styles from './styles';
import {TextInput} from 'react-native';

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = props => {
  return <TextInput style={styles.container} returnKeyType="done" {...props} />;
};

export default Input;
